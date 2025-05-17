import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { budgetFormSchema, BudgetFormValues } from './formSchema';
import { IBudget } from '../../../../domain/IBudget';
import { useState } from 'react';
import { formatDateInput } from '../../../../utils/format';
import useBudget from '../../../../hooks/budgets/useBudget';
import { mapFormToBudgetRequest } from '../../../../adapters/mapFormToBudgetRequest';

type AddBudgetFormProps = {
    budget?: IBudget;
}

export default function AddBudgetForm({ budget }: AddBudgetFormProps) {
    const [fromValue, setFromValue] = useState(budget?.BudgetFrom ?? '');
    const [toValue, setToValue] = useState(budget?.BudgetTo ?? '');
    const { isLoading, addBudget } = useBudget();

    const { register, handleSubmit, setValue, formState: { errors, isValid  } } = useForm<BudgetFormValues>({
        defaultValues: budget ? {
            name: budget.BudgetName,
            description: budget.BudgetDescription,
            from: budget.BudgetFrom,
            to: budget.BudgetTo,
            amount: budget.Amount
        } : undefined,
        resolver: zodResolver(budgetFormSchema),
        mode: "onChange"
    });

    function onSubmit(data: BudgetFormValues) {
        const payload = mapFormToBudgetRequest(data);
        addBudget(payload);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h6' sx={{mb: 2}}>
                {budget ? 'Editar presupuesto' : 'Agregar un nuevo presupuesto'}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <FormControl>
                    <InputLabel htmlFor="inp-name">Nombre</InputLabel>
                    <Input id="inp-name" {...register("name")} />
                    {errors.name && <FormHelperText sx={{color: 'red'}}>{errors.name.message}</FormHelperText>}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="inp-description">Descripción</InputLabel>
                    <Input id="inp-description" {...register("description")} />
                </FormControl>
                <FormControl error={!!errors.from}>
                    <InputLabel htmlFor="inp-from">Desde</InputLabel>
                    <Input 
                        id="inp-from" 
                        value={fromValue}
                        onChange={(e) => {
                            const formatted = formatDateInput(e.target.value);
                            setFromValue(formatted);
                            setValue("from", formatted); // Utilizo setValue porque ...register ya ejecuta el onChange y me lo sobreescribe
                        }}
                        placeholder="DD-MM-YYYY"
                        inputProps={{ maxLength: 10 }} />
                    {errors.from && <FormHelperText sx={{color: 'red'}}>{errors.from.message}</FormHelperText>}
                </FormControl>
                <FormControl error={!!errors.to}>
                    <InputLabel htmlFor="inp-to">Hasta</InputLabel>
                    <Input
                        id="inp-to"
                        value={toValue}
                        onChange={(e) => {
                            const formatted = formatDateInput(e.target.value);
                            setToValue(formatted);
                            setValue("to", formatted); // Utilizo setValue porque ...register ya ejecuta el onChange y me lo sobreescribe
                          }}
                        placeholder="DD-MM-YYYY"
                        inputProps={{ maxLength: 10 }} />
                    {errors.to && <FormHelperText>{errors.to.message}</FormHelperText>}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="inp-amount">Monto</InputLabel>
                    <Input id="inp-amount" {...register("amount", { valueAsNumber: true })} type='number' />
                    {errors.amount && <FormHelperText sx={{color: 'red'}}>{errors.amount.message}</FormHelperText>}
                </FormControl>
            </Box>

            <Button 
                loading={isLoading} 
                loadingPosition="end" 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={handleSubmit(onSubmit)} 
                sx={{mt: 2, width: '100%'}} 
                disabled={!isValid}>
                    {budget ? 'Editar' : 'Agregar'}
            </Button>
        </form>
    )
}
