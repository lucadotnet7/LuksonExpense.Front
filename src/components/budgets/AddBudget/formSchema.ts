import { z } from 'zod';

const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

export const budgetFormSchema = z.object({
    name: z.string({
        required_error: "Debe ingresar un nombre para el presupuesto",
    }).min(4, {
      message: "El nombre del presupuesto debe tener al menos 4 caracteres"
    }).max(80, {
      message: "El nombre del presupuesto debe tener como máximo 80 caracteres"
    }),
    description: z.string().optional(),
    from: z.string({
      required_error: "Debe ingresar una fecha de inicio para el presupuesto"
    }).regex(dateRegex, {
      message: "La fecha debe tener el formato DD-MM-YYYY"
    }).refine((val) => {
      const [dd, mm, yyyy] = val.split('-').map(Number);
      const date = new Date(yyyy, mm - 1, dd);
      return (
        date.getFullYear() === yyyy &&
        date.getMonth() === mm - 1 &&
        date.getDate() === dd
      );
    }, {
      message: "Debe ser una fecha válida"
    }),
    to: z.string({
      required_error: "Debe ingresar una fecha de fin para el presupuesto"
    }).regex(dateRegex, {
      message: "La fecha debe tener el formato DD-MM-YYYY"
    }).refine((val) => {
      const [dd, mm, yyyy] = val.split('-').map(Number);
      const date = new Date(yyyy, mm - 1, dd);
      return (
        date.getFullYear() === yyyy &&
        date.getMonth() === mm - 1 &&
        date.getDate() === dd
      );
    }, {
      message: "Debe ser una fecha válida"
    }),
    amount: z.number({
      required_error: "Debe ingresar un monto para el presupuesto",
      invalid_type_error: "El monto debe ser un número"
    }).min(1, {
      message: "El monto debe ser mayor que 0"
    })
});

export type BudgetFormValues = z.infer<typeof budgetFormSchema>;