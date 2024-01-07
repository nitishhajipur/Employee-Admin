import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { Application } from "./reducer";

const store=configureStore({
    // middleware:[thunk],
    reducer:Application,

})
export default store