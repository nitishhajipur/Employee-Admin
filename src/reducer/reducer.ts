import { UserInfo } from "../constants/userPageContants/userDataType"
import { appTypes } from "./types"

const initialState={
    allUserData:null,
    currentSheetDetails:null,
    isAuthenticated:false,
    modal:{
        show:false,
         onCancel:()=>{},
        onOk:()=>{},
        messeage:"",
        title:""
    },
    userDetails:null
}
export const Application=(state=initialState,action:any)=>{
    switch(action.type){
        case appTypes.ALL_USER_DATA:
            return{...state,allUserData:action.payload}
        case appTypes.CURRENT_SHEET_DETAILS:
            return{...state,currentSheetDetails:action.payload}
        case appTypes.IS_AUTHENTICATED:
            return{...state,isAuthenticated:action.payload}
        case appTypes.DISPATCH_ALERT:
            return{...state,modal:action.payload}
        case appTypes.USER_DETAILS:
            return{...state,userDetails:action.payload}
        default:
            return{...state}
    }

}