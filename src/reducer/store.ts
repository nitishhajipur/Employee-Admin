import { configureStore,applyMiddleware, asyncThunkCreator } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { Application } from "./reducer";

const store=configureStore({
    // getDefaultMiddleware:{},
    reducer:Application,

},)
export default store