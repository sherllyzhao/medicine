// 日志中间件
import {thunk} from "redux-thunk";
// 异步中间件
import promiseMiddleware from "redux-promise";
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import userApp from "./reducer";
//  持久化中间件
import {persistStore} from "redux-persist";

function configureStore(){
    let reducer = userApp;
    let store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware));
    let persistor = persistStore(store);

    return { persistor, store }
}

export const { persistor, store } = configureStore();
