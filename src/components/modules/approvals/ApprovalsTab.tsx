import React from 'react'
import TabPanelsComponent from '../../../common/TabPannels'
import { TabMenuList } from '../../../constants/ApprovalsTabConstants/Tabpannels'
const ApprovalsIndex=(props:any)=>{
    return(
        <>
        <TabPanelsComponent data={TabMenuList}/>
        </>
    )

}
export default ApprovalsIndex