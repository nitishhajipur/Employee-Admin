import React from 'react'
const SheetsDataList=(props:any)=>{
    const {data}=props
    return(
        <>
        <p>{props.title}</p>
        {
            data?.map((sheetItem:any,index:number)=>{
                return(
                    <div key={index}>
                        <span>{sheetItem.userName} - ( {sheetItem.department})</span>
                    </div>
                )

            })
        }

        </>
    )
}
export default SheetsDataList