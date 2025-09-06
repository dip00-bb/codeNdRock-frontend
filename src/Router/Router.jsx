import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../Component/LandingPage";
import ProblemTable from "../Pages/ProblemTable";
import CodeEditor from "../Pages/CodeEditor";
import ProblemDetails from "../Component/ProblemDetails";

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
            }

        ]
    }
])