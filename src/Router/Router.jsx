import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../Component/LandingPage";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'/',
                Component:LandingPage
            }
        ]
    }
])