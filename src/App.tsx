import { ReactElement, lazy, StrictMode } from 'react';

const Router = lazy(() => import('./common/Router'));
const Footer = lazy(() => import('./common/Footer'));

/**
 * Renders the main application component.
 *
 * @return {ReactElement} The rendered application component.
 */
export default function App(): ReactElement {
    return (
        <>
            <StrictMode>
                <Router />
                <Footer />
            </StrictMode>
        </>
    );
}
