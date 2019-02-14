import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import appReducer from '../reducers';
import logger from "../middlewares";

const enhancer = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(appReducer, enhancer);

export default store;
