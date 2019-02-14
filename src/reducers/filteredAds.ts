import { FIND_ADS } from "../data/actions/actionTypes";
import { IAction, IAd } from "../data/interfaces";

export const filteredAds = (state: IAd[] = [], action: IAction) => {
    if (action.type === FIND_ADS) {
        return action.payload;
    }

    return state;
};
