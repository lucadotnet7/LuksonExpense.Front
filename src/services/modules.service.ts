import { IApiResponse } from "../domain/base/IApiResponse";
import { IModuleList } from "../domain/module/IModule";
import axios, { AxiosInstance } from "axios";

class ModulesService {
    baseUrl = import.meta.env.VITE_API_BASE_URL;
    
    readonly client: AxiosInstance; 
    
    constructor() {
        this.client = axios.create({
            baseURL: this.baseUrl + "/Modules/"
        });
    }
    
    async getModulesList(): Promise<IApiResponse<IModuleList>> {
        try {
            const { data } = await this.client.get<IApiResponse<IModuleList>>("List");

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const modulesService = new ModulesService();

export default modulesService;