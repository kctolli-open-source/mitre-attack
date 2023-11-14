import Index from './components/Index';
import Reconnaissance from './components/Reconnaissance';

const routes = [
    {
        path: "/",
        element: <Index />
    },
    {
        path: "reconnaissance",
        element: <Reconnaissance />
    }
];

export default routes;
