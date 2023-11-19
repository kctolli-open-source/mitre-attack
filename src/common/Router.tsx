 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeType } from "../types";

/**
 * Renders a router component that handles the routing of the application.
 *
 * @return {JSX.Element} The router component.
 */
export default function Router({routes}: { routes: routeType[] }) {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );    
}
