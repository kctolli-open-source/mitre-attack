import Index from './components/Index';
import Reconnaissance from './components/Reconnaissance';
import ResourceDevelopment from './components/ResourceDevelopment';

const routes = [
    {
        path: "/",
        element: <Index />
    },
    {
        path: "reconnaissance",
        element: <Reconnaissance />
    },
    {
        path: "resourcedevelopment",
        element: <ResourceDevelopment />
    }
];

export default routes;
