import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./layout";
import ProjectsPage from "./projects/page";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/projects/:slug",
                    element: <ProjectsPage />  
                }
            ]
        }
    ]
)