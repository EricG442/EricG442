import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./layout";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ]
)