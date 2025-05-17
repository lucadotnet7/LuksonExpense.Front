import axios, { AxiosInstance } from "axios";
import { IBudget } from "../domain/IBudget";
import { IRequest } from "../domain/base/IRequest";

class BudgetsService {
    baseUrl = import.meta.env.VITE_API_BASE_URL;
    
    readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: this.baseUrl + '/Budget/'
        });
    }

    async addBudget(request: IRequest<IBudget>) {
        try {
            const { data } = await this.client.post("Add", request);
    
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const budgetService = new BudgetsService();
export default budgetService;