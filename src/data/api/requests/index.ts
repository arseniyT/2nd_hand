import { IAd, IUser } from "../../interfaces";
import ads from "../../constants/ads";
import { storageGetValue, storageSetValue } from "../../helpers";

const delay: number = 500;

if (!storageGetValue("ads")) {
    storageSetValue("ads", ads);
}

export const getAdsRequest = () => storageGetValue("ads");

export const addAdRequest = async (ad: IAd) => {
    return new Promise((resolve, reject) => {
        const ads = storageGetValue("ads");

        storageSetValue("ads", [...ads, ad]);
        setTimeout(() => {
            resolve(storageGetValue("ads"));
        }, delay);
    })
        .then(data => data);
};

export const deleteAdRequest = async (id: string) => {
    return new Promise((resolve, reject) => {
        const ads = storageGetValue("ads").filter((ad: IAd) => ad.id !== id);
        
        storageSetValue("ads", ads);
        setTimeout(() => {
            resolve(storageGetValue("ads"));
        }, delay);
    })
        .then(data => data);
};

export const updateAdRequest = async (ad: IAd) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const ads = storageGetValue("ads")
                .filter((remainingAd: IAd) => remainingAd.id !== ad.id);

            storageSetValue("ads", [...ads, ad]);
            resolve(storageGetValue("ads"));
        }, delay);
    })
        .then(data => data);
};

if (!storageGetValue("users")) {
    storageSetValue("users", []);
}

export const getUsersRequest = () => {
    return storageGetValue("users");
};

export const addUserRequest = async (user: IUser) => {
    const users = storageGetValue("users");

    storageSetValue("users", [...users, user]);
    return storageGetValue("users");
};

export const deleteUserRequest = async (user: IUser) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = storageGetValue("users")
                .filter((userF: IUser) => userF.username !== user.username);

            storageSetValue("users", users);
            resolve(storageGetValue("users"));
        }, delay);
    })
        .then(data => data);
};

export const updateUserRequest = async (user: IUser) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = storageGetValue("users")
                .filter((remainingUser: IUser) => remainingUser.username !== user.username);

            storageSetValue("users", [...users, user]);
            resolve(storageGetValue("users"));
        }, delay);
    })
        .then(data => data);
};
