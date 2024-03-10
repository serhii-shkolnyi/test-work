import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {AlertsPage, MonitoringPage, SensorsPage, SessionsPage} from "../pages";

const routerConfig = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={"sessions"}/>,
            },
            {
                path: "monitoring",
                element: <MonitoringPage/>
            },
            {
                path: "sensors",
                element: <SensorsPage/>
            },
            {
                path: "alerts",
                element: <AlertsPage/>
            },
            {
                path: "sessions",
                element: <SessionsPage/>
            }
        ]
    }
]);

export {routerConfig};
