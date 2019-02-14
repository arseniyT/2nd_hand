import { IUser, IAd, IState } from "../interfaces";
import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import { defaultUser } from "../constants/users";
import lodash from "lodash";
import { addAdRequest, getAdsRequest, deleteAdRequest } from "../api/requests";

export const logIn = (user: IUser) => (dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.SIGNIN,
        payload: user,
    });
};

export const logOut = () => (dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT,
        payload: defaultUser
    });
};

export const addUser = (user: IUser) => (dispatch: Dispatch) => {
    dispatch({ 
        type: actionTypes.ADD_USER,
        payload: user,
    });
};

export const deleteUser = () => async (dispatch: Dispatch, getState: () => IState) => {
    const user = getState().user;
    const ads = await getAdsRequest();
    const filteredAds = ads.filter((ad: IAd) => ad.username !== user.username);

    await ads.forEach((ad: IAd) => {
        if (ad.id && ad.username === user.username) deleteAdRequest(ad.id);
    });
    dispatch({
        type: actionTypes.DELETE_USER,
        payload: filteredAds,
    });
    getUserAds();
};

export const getUser = (user: IUser) => async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.GET_USER });
};

export const getUsers = () => async (dispatch: Dispatch, getState: () => IState) => {
    const ads = await getAdsRequest();
    const userNames = ads.map((ad: IAd) => (ad.username)).sort();
    const users = lodash.uniq(userNames).map((user: any) => ({ username: user }));

    dispatch({
        type: actionTypes.GET_USERS,
        payload: users,
    });
};

export const getUserAds = () => async (dispatch: Dispatch, getState: () => IState) => {
    const user = getState().user;
    const ads = await getAdsRequest();
    const userAds = ads.filter((ad: IAd) => (ad.username === user.username)).sort();
    const uniqueAds = lodash.uniq(userAds).map((ad: any) => (ad));

    dispatch({
        type: actionTypes.GET_USER_ADS,
        payload: uniqueAds,
    });
};

export const addAd = (ad: IAd) => async (dispatch: Dispatch) => {
    const ads = await addAdRequest(ad);

    dispatch({
        type: actionTypes.ADD_AD,
        payload: ads,
    });
};

export const getCategories = () => async (dispatch: Dispatch, getState: () => IState) => {
    dispatch({ type: actionTypes.GET_CATEGORIES });
};

export const findAds = (category: string) => async (dispatch: Dispatch, getState: () => IState) => {
    const ads = await getAdsRequest();
    const filteredAds = lodash.filter(ads, { category: category });
    
    dispatch({
        type: actionTypes.FIND_ADS,
        payload: filteredAds,
    });
};

export const deleteAd = (id: string) => async (dispatch: Dispatch, getState: () => IState) => {
    const ads = getAdsRequest();

    await deleteAdRequest(id);
    dispatch({
        type: actionTypes.DELETE_AD,
        payload: ads,
    });
    await getUserAds();
}

export const getAds = () => async (dispatch: Dispatch) => {
    const ads = await getAdsRequest();

    dispatch({
        type: actionTypes.GET_ADS,
        payload: ads,
    });
};
