import { useDispatch, /*useSelector*/ } from "react-redux";
import { IBudget } from "../domain/IBudget";

const useBudget = () => {
    const dispatch = useDispatch();
    //const { budget } = useSelector(selectBudget);

    const addBudget = (newBudget: IBudget) => {
        dispatch({type: "@budget/add", payload: { budget: newBudget }});
    }

    return  {
        //budget,
        addBudget
    }
}

export default useBudget;