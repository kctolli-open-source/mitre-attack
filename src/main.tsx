import ReactDOM from 'react-dom/client';
import React from 'react';

import Footer from './components/Footer';
import Router from './components/Router';

const root = document.getElementById('root');
ReactDOM.createRoot(root!).render(
    <React.StrictMode>
        <Router />
        <Footer />
    </React.StrictMode>
);
