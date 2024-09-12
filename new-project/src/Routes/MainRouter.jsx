import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./../Pages/main";
import About from "./../Pages/About";
import Contactus from "./../Pages/Contactus";
import HeaderCompo from "./../Components/HeaderFile";
import Slider from "./../Components/Slider";
import LoginCompo from "./../Pages/LoginCompo.jsx";
import RegistrationCompo from "./../Pages/RegistrationCompo.jsx";
import ProductApi from "./../Pages/ProductApi.jsx";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeaderCompo />
                <Slider/>
                <MainPage />
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <HeaderCompo />
                <About />
            </>
        ),
    }, {
        path: "/login",
        element: (
            <>
                <HeaderCompo />
                <LoginCompo />
            </>
        ),
    }, {
        path: "/signup",
        element: (
            <>
                <HeaderCompo />
                <RegistrationCompo />
            </>
        ),
    },{
        path: "/contact",
        element: (
            <>
                <HeaderCompo />
                <Contactus />
            </>
        ),
    }, {
        path: "/product",
        element: (
            <>
                <HeaderCompo />
                <ProductApi />
            </>
        ),
    }
])


export default MainRouter;