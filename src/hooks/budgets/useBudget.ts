import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useCallback } from "react";
import { shallowEqual } from "react-redux";
import { selectBudget } from "../../store/features/budgets";
import { createBudget } from "../../store/features/budgets/actions";
import { IBudget } from "../../domain/IBudget";
import { IRequest } from "../../domain/base/IRequest";

const useBudget = () => {
    const dispatch = useAppDispatch();
    const { content, error, isLoading } = useAppSelector(selectBudget, shallowEqual);

    const addBudget = useCallback((request: IRequest<IBudget>) => {
        dispatch(createBudget(request));
    }, [dispatch]);

    return {
        content,
        error, 
        isLoading,
        addBudget
    }
}

export default useBudget;