export interface IBudget {
    BudgetName: string;
    BudgetDescription?: string | undefined;
    BudgetFrom: string;
    BudgetTo: string;
    Amount: number;
}