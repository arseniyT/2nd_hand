import { IAction, IAd } from "../data/interfaces";
import { PLACING_AD } from "../data/actions/actionTypes";

const initialState = {
    username: "",
    category: "",
    title: "",
    description: "",
    price: "",
};

export const placingAd = (state: IAd = initialState, action: IAction) => {
    if (action.type === PLACING_AD) {
        const storageUser = localStorage.getItem("user");
        const stateUser = storageUser ? JSON.parse(storageUser) : state;

        return stateUser;
    }

    return state;
};
