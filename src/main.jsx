import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeComponent from "./pages/home/Home.jsx";
import Specializations from "./pages/specializations/Specializations.jsx";
import Universities from "./pages/universities/Universities.jsx";
import About from "./pages/about/Abouts.jsx";
import Specialization from "./pages/specializations/modules/Specialization.jsx";
import Profile from "./pages/profile/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeComponent/>,
    },
    {
        path: "/specializations",
        element: <Specializations/>,
    },
    {
        path: "/universities",
        element: <Universities/>,
    },
    {
        path: "/about-us",
        element: <About/>,
    },
    {
        path: "/spec",
        element: <Specialization/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
