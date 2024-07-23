import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    // MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    // MDBDropdownItem, 
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);
    // const MenuData = {""}
    // const MenuData = ["Home","About","Contact"];
    const MenuData = {"/home":"Home",};
    // var htmlMenu = ''
    // MenuData.forEach(element => {
    //     console.log(element);
    //     htmlMenu+=<li>{element}</li>
    // });
    var htmlMenu = Object.entries(MenuData).map(([key,value],index)=>{
        // console.log(data,key);
        console.log("Object Key : ",key,"Object Value : ",value, "Loop Ittration : ",index);
        return <MDBNavbarItem key={index}> <Link className='nav-link' to={key}>{value}</Link> </MDBNavbarItem>
    })
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>React-Project</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                {htmlMenu}
                        {/* <MDBNavbarItem>
                            <Link className='nav-link' to="/">Home</Link>
                        </MDBNavbarItem> */}
                        {/* <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem> */}

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    {/* Account */}
                                    <i className='fa fa-user-circle'></i>

                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <Link className='dropdown-item' to="/login">Login</Link>
                                    {/* <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem> */}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}