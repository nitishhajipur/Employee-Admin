import { lazy } from "react";

export const TabMenuList=[
    {
        name:"Submitted-Sheets",
        id:"1",
        component:lazy(()=>import('../../components/modules/approvals/SubmittedSheets'))
    },
    {
        name:"Approved-Sheets",
        id:"2",
        component:lazy(()=>import('../../components/modules/approvals/ApprovedSheets'))
    }
 
]