import { lazy } from "react";

export const PublicRoutes=[
    {
        element:"/home",
        pathName:'/',
        component:lazy(()=>import('../components/appauthentication/SignIn')),
        to:'/'
    },
    {
        element:"/signUp",
        pathName:'/signUp',
        component:lazy(()=>import('../components/appauthentication/SignUp')),
        to:'/signUp'
    },
    {
        element:"*",
        pathName:'*',
        component:lazy(()=>import('../common/NoPageFound')),
        to:'*'
    }
]