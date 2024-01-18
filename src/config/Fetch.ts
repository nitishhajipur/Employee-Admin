import axios from "axios"

export const FetchData=(props:any)=>{
    const options = {
        url: props?.url,
        method: props.method,
        data: props.data,
        // timeOut: (1000 * 2),
        // headers:""
    }
    return (
        axios(options).then((response: any) => {
            return (response)
        })
    )
   


}