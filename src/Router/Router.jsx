import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../Component/LandingPage";
import ProblemTable from "../Pages/ProblemTable";
import CodeEditor from "../Pages/CodeEditor";
import ProblemDetails from "../Component/ProblemDetails";
import Leaderboard from "../Pages/LeaderBoard";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: LandingPage
            },
            {
                path: '/problems',
                Component: ProblemTable
            },
            {
                path: '/problems/:slug',
                Component: ProblemDetails
            },
            {
                path:'leaderboard',
                Component:Leaderboard
            }

        ]
    }
])