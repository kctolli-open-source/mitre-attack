import React from 'react';
import routes from "./routes";

const Router = React.lazy(() => import('./common/Router'));
const Footer = React.lazy(() => import('./common/Footer'));

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
export default function App(): React.ReactElement {
    return (
        <>
            <Router routes={routes} />
            <br /><hr />
            <Footer />
        </>
    );
}
