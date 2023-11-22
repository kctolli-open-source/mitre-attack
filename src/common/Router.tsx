 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

/**
 * Renders a router component that handles the routing of the application.
 *
 * @return {JSX.Element} The router component.
 */
export default function Router() {
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
