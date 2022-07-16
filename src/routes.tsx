import { useRoutes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Finance } from "./pages/Finance";

export const LayoutRoutes = () => (
    useRoutes([
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/wallets',
            element: <Finance />
        },
    ])
)

