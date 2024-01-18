import { UserInfo } from "../constants/userPageContants/userDataType"
import { appTypes } from "./types"

const initialState={
    allUserData:null,
}
export const Application=(state=initialState,action:any)=>{
    switch(action.type){
        case appTypes.ALL_USER_DATA:
            return{...state,allUserData:action.payload}
        
        default:
            return{...state}
    }

}