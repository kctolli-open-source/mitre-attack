import Common from './common/main';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
const App = (): JSX.Element => (
    <Common.StrictMode>
        <Common.Router />
        <Common.Footer />
    </Common.StrictMode>
);

export default App;
