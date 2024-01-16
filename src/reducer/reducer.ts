import { appTypes } from "./types"

const initialState={boolean:true}
export const Application=(state=initialState,action:any)=>{
    switch(action.type){
        case appTypes.TestBoolean:
            return{...state,boolean:action.payload}
        
        default:
            return{...state}
    }

}