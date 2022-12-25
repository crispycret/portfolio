import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import useIsMobile from '../../../helpers/hooks/useIsMobile';

import '../../../assets/css/sidenav.css'


const cdbreact = require('cdbreact'); 
const {
  CDBContainer,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownItem,
  CDBDropDownToggle,
  CDBLink,
} = cdbreact;



// const DashboardSidebarUser = () => {
//   // <CDBIcon border icon="user" className='border rounded-circle border-3 p-1 m-1'/>
//   return (
//       <CDBDropDown active>
//         <CDBDropDownToggle color="dark" onClick={(e: any) => console.log("TESTING")}>User</CDBDropDownToggle>
//         <CDBDropDownMenu dropdown>
//           <CDBDropDownItem color="dark">Cold place</CDBDropDownItem>
//           <CDBDropDownItem color="dark" active>Active</CDBDropDownItem>
//           <CDBDropDownItem toggle>Second</CDBDropDownItem>
//           <CDBDropDownItem>Last</CDBDropDownItem>
//         </CDBDropDownMenu>
//       </CDBDropDown>
//   );
// }


const Sidebar = (props: any) => {

  const {isMobile, isNotMobile} = useIsMobile()

  const toggle = <i className="fa fa-bars fa-large" onClick={(e:any) => props.setsidebarToggled(!props.sidebarToggled)}></i>

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'absolute' }}>
      <CDBSidebar 
        toggled={!Boolean(props.sidebarToggled)}
        className={`${isMobile? 'mobile' : ''}`} 
        textColor="#fff" backgroundColor="#333"
      >
       
        <CDBSidebarHeader prefix={toggle} className={`${isMobile? 'mobile-toggle' : ''}`}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </a>
        </CDBSidebarHeader>


        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink end to="/">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>

{/* 
            <NavLink end to="/dashboard">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </NavLink>
 */}
 
            <NavLink end to="/dashboard/projects">
              <CDBSidebarMenuItem icon="sticky-note">Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink end to="/dashboard/analytics">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink end to="/hero404" target="_blank">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* <Button onClick={e => props.apis.portfolio.userManager.logout()}>Logout</Button> */}
          {/* <DashboardSidebarUser /> */}
          {/* <div style={{padding: '20px 5px',}}>Sidebar Footer</div> */}
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;