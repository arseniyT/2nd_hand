import * as actionTypes from "../data/actions/actionTypes";
import { IAction, IAd } from "../data/interfaces";

export const ads = (state: IAd[] = [], action: IAction) => {
    if (action.type === actionTypes.GET_ADS) {
        return [...action.payload];
    }

    if (action.type === actionTypes.ADD_AD) {
        return [...state, action.payload];
    }

    if (action.type === actionTypes.DELETE_AD) {
        return action.payload;
    }

    if (action.type === actionTypes.DELETE_USER) {
        return action.payload;
    }

    return state;
};