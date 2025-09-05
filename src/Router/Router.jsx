import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../Component/LandingPage";
import ProblemTable from "../Component/ProblemTable";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'/',
                Component:LandingPage
            },
            {
                path:'/problems',
                Component:ProblemTable
            },

        ]
    }
])