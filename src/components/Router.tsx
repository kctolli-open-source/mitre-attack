/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import routes from "./routes";

const Router = () => (
    <React.Suspense fallback={<h2>Loading...</h2>}>
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
    </React.Suspense>
);

export default React.memo(Router);
