import { combineReducers } from "redux";
import moduleReducer from "./features/modules/index";
import budgetReducer from "./features/budgets/index";

export const reducers = combineReducers({
    moduleReducer,
    budgetReducer
});