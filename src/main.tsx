import Components from './components/main';

const root = document.getElementById('root');
Components.createRoot(root!).render(
    <Components.StrictMode>
        <Components.Router />
        <Components.Footer />
    </Components.StrictMode>
);
