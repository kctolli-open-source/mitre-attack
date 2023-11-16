import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!)
.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
        <br /><hr />
        <footer>
            &copy; {(new Date()).getFullYear()} Kyle Tolliver - Security Attack
            <br /> 
            All rights reserved - Mitre ATT&CK
        </footer>
    </React.StrictMode>,
);
