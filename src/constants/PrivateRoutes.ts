import { lazy } from "react";

const PrivateRoutes=[
    {
        path:"/",
        to:'/',
        elment:"home",
        component:lazy(()=>import('../components/navbar/NavbarItem'))
    }
]