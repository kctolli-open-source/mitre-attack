import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import Router from './Router';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router />
        <Footer />
    </React.StrictMode>,
);
