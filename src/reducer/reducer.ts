import { UserInfo } from "../constants/userPageContants/userDataType"
import { appTypes } from "./types"

const initialState={
    allUserData:null,
    currentSheetDetails:null
}
export const Application=(state=initialState,action:any)=>{
    switch(action.type){
        case appTypes.ALL_USER_DATA:
            return{...state,allUserData:action.payload}
        case appTypes.CURRENT_SHEET_DETAILS:
            return{...state,currentSheetDetails:action.payload}
        default:
            return{...state}
    }

}