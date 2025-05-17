import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../../domain/base/IState";
import { RootState } from "../../store";
import { createBudget } from "./actions";
import { IBudget } from "../../../domain/IBudget";

export interface IBudgetState {
    budget: IState<IBudget | null>;
}

const initialState: IBudgetState = {
    budget: {
        content: null,
        error: null,
        isLoading: false
    }
}

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBudget.pending, (state) => {
            state.budget.isLoading = true;
            state.budget.error = null;
        })
        .addCase(createBudget.fulfilled, (state, action) => {
            state.budget.isLoading = false;
            state.budget.content = action.payload;
            state.budget.error = null;
        })
        .addCase(createBudget.rejected, (state, action) => {
            state.budget.isLoading = false;
            state.budget.error = action.payload as string;
        })
    }
});

export const selectBudget = (store: RootState) => store.budgetReducer.budget;

export default budgetSlice.reducer;