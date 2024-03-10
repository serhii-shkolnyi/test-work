import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout";

const routerCongig = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
    }
]);
