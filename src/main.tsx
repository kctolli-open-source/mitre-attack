import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Footer from './components/Footer';
import Router from './components/Router';

const root = document.getElementById('root');
createRoot(root!).render(
    <StrictMode>
        <Router />
        <Footer />
    </StrictMode>
);
