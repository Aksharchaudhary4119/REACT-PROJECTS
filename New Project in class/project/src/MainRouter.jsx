import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./Components/HeaderCompo.jsx";
import HomeCompo from "./Page/Home.jsx";
import LoginComponent from "./Page/LoginRegisterPage.jsx";
import RegistrationComponent from "./Page/RegistrationComponent.jsx";

const router = createBrowserRouter([

    {
        path:"/",
        element:<> <HeaderCompo/> <div>Hello Akshar </div></>,
    },{
        path:"/home",
        element:<> <HeaderCompo/> <HomeCompo/> </>,
    },{
        path: "login",
        element: <><HeaderCompo/> <LoginComponent/></>,
    },{
        path: "registration",
        element: <><HeaderCompo/> <RegistrationComponent/></>,
    },
])

export default router;