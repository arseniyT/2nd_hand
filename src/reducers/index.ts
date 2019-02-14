import { combineReducers } from 'redux';
import { user } from "./user";
import { users } from "./users";
import { ads } from "./ads";
import { userAds } from "./userAds";
import { placingAd } from "./placingAd";
import { filteredAds } from "./filteredAds";

const appReducer = combineReducers({
    user,
    users,
    ads,
    userAds,
    placingAd,
    filteredAds,
});

export default appReducer;