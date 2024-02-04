import React from 'react'
import TabPanelsComponent from '../../../common/TabPannels'
import { TabMenuList } from '../../../constants/ApprovalsTabConstants/Tabpannels'
const ApprovalsIndex=(props:any)=>{
    return(
        <div className='mx-5 my-3'>
        <TabPanelsComponent data={TabMenuList}/>
        </div>
    )

}
export default ApprovalsIndex