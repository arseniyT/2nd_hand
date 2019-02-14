import { IAd, IAction } from "../data/interfaces";
import * as actionTypes from "../data/actions/actionTypes";

export const userAds = (state: IAd[] = [], action: IAction) => {
    if (action.type === actionTypes.GET_USER_ADS) {
        return [...action.payload];
    }

    if (action.type === actionTypes.DELETE_USER) {
        return [...action.payload];
    }

    return state;
};
