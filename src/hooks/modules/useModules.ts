import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectModuleList } from "../../store/features/modules";
import { fetchModuleList } from "../../store/features/modules/actions";
import { useCallback } from "react";
import { shallowEqual } from "react-redux";

const useModules = () => {
    const dispatch = useAppDispatch();
    const { content, error, isLoading } = useAppSelector(selectModuleList, shallowEqual);

    const getModules = useCallback(() => {
        dispatch(fetchModuleList());
    }, [dispatch]);

    return {
        content,
        error, 
        isLoading,
        getModules
    }
}

export default useModules;