import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';

import Footer from './components/Footer';

import routes from "./data/routes";

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
    <React.StrictMode>
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
        <Footer />
    </React.StrictMode>
);
