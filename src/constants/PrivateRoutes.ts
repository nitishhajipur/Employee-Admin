import { lazy } from 'react';

export const privateRoutes=
[
    {
        element:"/home",
        pathName:"/*",
        component:lazy(()=>import('../components/navbar/NavbarItem')),
        to:"/*",
        renderChildren:true,
        children:[
            {
                element:"homepage",
                pathName:"./",
                component:lazy(()=>import('../components/modules/homePage/Homepage')),
                to:'./',
            }
        ]
    },

]