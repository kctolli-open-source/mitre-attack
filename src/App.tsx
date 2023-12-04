/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from './components/main';

/**
 * Renders the App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
const App = (): JSX.Element => (
    <Components.StrictMode>
        <Components.Suspense fallback={<h2>Loading ...</h2>}>
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
        </Components.Suspense>
        <Components.Footer />
    </Components.StrictMode>
);

export default Components.memo(App);
