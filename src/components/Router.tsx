/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, memo } from "react";

import Components from "./Components";

/**
 * Renders the router component.
 * Dependent on Suspense, BrowserRouter, Routes, and Route 
 * Data from Components class
 *
 * @return {JSX.Element} The router component.
 */
const Router = (): JSX.Element => (
    <Suspense fallback={<h2>Loading...</h2>}>
        <BrowserRouter>
            <Routes>
                {Components?.routes.map(route => (
                    <Route 
                        key={route?.path} 
                        path={route?.path} 
                        element={route?.element} 
                    />
                ))}
            </Routes>
        </BrowserRouter>
    </Suspense>
);

export default memo(Router);
