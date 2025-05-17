import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import budgetService from "../../../services/budgets.service";
import { IBudget } from "../../../domain/IBudget";
import { IRequest } from "../../../domain/base/IRequest";

const MESSAGE_STATUS = new Map<number, string>();

MESSAGE_STATUS.set(404, "La información solicitada no existe.");
MESSAGE_STATUS.set(500, "Error de servidor. Inténtelo de nuevo más tarde.");

export const createBudget = createAsyncThunk<any, IRequest<IBudget>>(
    "budget/createBudget",
    async (request, {rejectWithValue}) => {
        try {
            const result = await budgetService.addBudget(request);
            return result;
        } catch (error) {
            let message = "Ocurrió un error al crear el presupuesto, por favor intente mas tarde.";

            if (isAxiosError(error) && error.response) {
                const errorCode = error.response.status;
                const responseMessage = error.response.data?.[0]?.message;

                message = responseMessage ?? MESSAGE_STATUS.get(errorCode) ?? message;
            }

            //TODO: Implementar un alert o pop up alert
            console.log("ERROR: ", message);

            return rejectWithValue(error);
        }
    }
);