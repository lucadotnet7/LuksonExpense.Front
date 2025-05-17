import { BudgetFormValues } from "../pages/Budgets/components/BudgetForm/formSchema";
import { IRequest } from "../domain/base/IRequest";
import { IBudget } from "../domain/IBudget";

export function mapFormToBudgetRequest(values: BudgetFormValues): IRequest<IBudget> {
  // Aseguramos el formato YYYY-MM-DD si lo estás manipulando como DD-MM-YYYY
  const toISODate = (input: string) => {
    const [day, month, year] = input.split("-");
    return `${year}-${month}-${day}`; // ← backend espera YYYY-MM-DD
  };

  const requestResult: IRequest<IBudget> = {
    request: {
      BudgetName: values.name,
      BudgetDescription: values.description,
      BudgetFrom: toISODate(values.from),
      BudgetTo: toISODate(values.to),
      Amount: values.amount
    }
  }

  return requestResult;
}