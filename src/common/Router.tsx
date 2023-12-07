"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { memo } from "react";

/**
 * Renders a React Router component with the provided routes.
 *
 * @param {Array} routes - An array of route objects.
 * @return {JSX.Element} The React Router component.
 */
const Router = ({routes}: {routes: any[]}): JSX.Element => (
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

export default memo(Router);
