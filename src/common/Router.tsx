"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Renders a React Router component with the provided routes.
 *
 * @param {Array} routes - An array of route objects.
 * @return {JSX.Element} The React Router component.
 */
export default function Router({routes}: {routes: any[]}): JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                {routes.map(route => (
                    <Route 
                        key={route?.path} 
                        path={route?.path} 
                        element={route?.element} 
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
