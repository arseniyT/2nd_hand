import * as actionTypes from "../data/actions/actionTypes";
import { IUser, IAction } from "../data/interfaces";

export const users = (state: IUser[] = [], action: IAction) => {
  if (action.type === actionTypes.GET_USERS) {
    return [...action.payload];
  }

  if (action.type === actionTypes.ADD_USER) {
    return [...state, action.payload];
  }

  return state;
};
