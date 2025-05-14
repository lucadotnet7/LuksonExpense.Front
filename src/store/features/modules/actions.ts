import { createAsyncThunk } from "@reduxjs/toolkit";
import modulesService from "../../../services/modules.service";
import { isAxiosError } from "axios";

const MESSAGE_STATUS = new Map<number, string>();

MESSAGE_STATUS.set(404, "La información solicitada no existe.");
MESSAGE_STATUS.set(500, "Error de servidor. Inténtelo de nuevo más tarde.");

export const fetchModuleList = createAsyncThunk(
    "module/fetchModulesList",
    async (_, {rejectWithValue}) => {
        try {
            const result = await modulesService.getModulesList();
            return result.content;
        } catch (error) {
            let message = "Ocurrió un error al obtener el usuario, por favor intente mas tarde.";

            if (isAxiosError(error) && error.response) {
                const errorCode = error.response.status;
                const responseMessage = error.response.data?.[0]?.message;

                message = responseMessage ?? MESSAGE_STATUS.get(errorCode) ?? message;
            }

            console.log("ERROR: ", message);

            return rejectWithValue(error);
        }
    }
);