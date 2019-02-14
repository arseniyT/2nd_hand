import storage from "local-storage-fallback";
import { LOCAL_STORAGE_TYPE } from "../types/localStorage";

export const storageClearAll = () => {
  storage.clear();
};

export const storageSetValue = (key: LOCAL_STORAGE_TYPE, value: any) => {
  storage.setItem(key, JSON.stringify(value));
};

export const storageGetValue = (key: LOCAL_STORAGE_TYPE) => {
  try {
    return JSON.parse(storage.getItem(key) || "");
  } catch (e) {
    return;
  }
};

export const storageRemoveValue = (key: LOCAL_STORAGE_TYPE) => {
  return storage.removeItem(key);
};
