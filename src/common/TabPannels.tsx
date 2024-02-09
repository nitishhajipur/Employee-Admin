import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const  TabPanelsComponent=(props:any)=> {
    const {data}=props
  const [value, setValue] = React.useState(data['0']?.id);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
                data?.map((tabmenu:any)=>(

                    <Tab label={tabmenu?.name} value={tabmenu?.id}/>
                ))
            }
          </TabList>
        </Box>
        {

            data?.map((tabmenu:any,index:number)=>{
                return(

                <TabPanel value={tabmenu.id} key={index}>
                    {
                        <React.Suspense>
                            <tabmenu.component/>
                        </React.Suspense>
                    }
                </TabPanel>
                )
            })}

            
        
       
      </TabContext>
    </Box>
  );
}
export default TabPanelsComponent
// import React from 'react'
// import { useState } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// function TabPanelsComponent(props:any) {
//   const {data}=props
//   const [key, setKey] = useState(data['0']?.id);

//   return (
//     <Tabs
//       id="controlled-tab-example"
//       activeKey={key}
//       onSelect={(k:any) => setKey(k)}
//       className="mb-3"
//     >
//       {

//         data?.map((tabmenu:any,index:number)=>{
//                   return(
//                     <Tab eventKey={tabmenu?.id} title={tabmenu?.name}>
//          <React.Suspense>


// <tabmenu.component/>                     </React.Suspense>
//       </Tab>
                    
//                   )})
            
//           }
//     </Tabs>
//   );
// }

// export default TabPanelsComponent;


