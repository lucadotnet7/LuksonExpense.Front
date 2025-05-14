import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../../domain/base/IState";
import { IModuleList } from "../../../domain/module/IModule";
import { RootState } from "../../store";
import { fetchModuleList } from "./actions";

export interface IModuleState {
    moduleList: IState<IModuleList | null>;
}

const initialState: IModuleState = {
    moduleList: {
        content: null,
        error: null,
        isLoading: false
    }
}

export const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchModuleList.pending, (state) => {
            state.moduleList.isLoading = true;
            state.moduleList.error = null;
        })
        .addCase(fetchModuleList.fulfilled, (state, action) => {
            state.moduleList.isLoading = false;
            state.moduleList.content = action.payload;
            state.moduleList.error = null;
        })
        .addCase(fetchModuleList.rejected, (state, action) => {
            state.moduleList.isLoading = false;
            state.moduleList.error = action.payload as string;
        })
    }
});

export const selectModuleList = (store: RootState) => store.moduleReducer.moduleList;

export default moduleSlice.reducer;