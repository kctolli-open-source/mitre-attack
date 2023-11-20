import { ReactElement, lazy } from 'react';
import routes from "./common/routes";

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
            <Router routes={routes} />
            <br /><hr />
            <Footer />
        </>
    );
}
