import { combineReducers } from "redux";
import { Application } from "./reducer";

 const MainReducer=combineReducers({
    application:Application

})
export default MainReducer

