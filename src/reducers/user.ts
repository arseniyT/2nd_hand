import * as actionTypes from "../data/actions/actionTypes";
import { defaultUser } from "../data/constants/users";
import { IUser, IAction } from "../data/interfaces";
import { storageSetValue, storageGetValue } from "../data/helpers";

if (!storageGetValue("user")) {
    storageSetValue("user", defaultUser);
}

export const user = (state: IUser = defaultUser, action: IAction) => {

    if (action.type === actionTypes.SIGNIN) {
        storageSetValue("user", action.payload);
        return { ...action.payload };
    }

    if (action.type === actionTypes.LOGOUT) {
        storageSetValue("user", action.payload);
        return { ...action.payload };
    }

    return storageGetValue("user");
};
