import components from '../components/main';
import { routeType } from '../common/type';

const routes: routeType[] = [
    {
        path: "*",
        element: <components.Index />
    },
    {
        path: "reconnaissance",
        element: <components.Reconnaissance />
    },
    {
        path: "resourcedevelopment",
        element: <components.ResourceDevelopment />
    },
    {
        path: "initialaccess",
        element: <components.InitialAccess />
    },
    {
        path: "execution",
        element: <components.Execution />
    },
    {
        path: "persistence",
        element: <components.Persistence />
    },
    {
        path: "privilegeescalation",
        element: <components.PrivilegeEscalation />
    },
    {
        path: "defenseevasion",
        element: <components.DefenseEvasion />
    },
    {
        path: "credentialaccess",
        element: <components.CredentialAccess />
    },
    {
        path: "discovery",
        element: <components.Discovery />
    },
    {
        path: "lateralmovement",
        element: <components.LateralMovement />
    },
    {
        path: "collection",
        element: <components.Collection />
    },
    {
        path: "commandcontrol",
        element: <components.CommandControl />
    },
    {
        path: "exfiltration",
        element: <components.Exfilration />
    }, 
    {
        path: "impact",
        element: <components.Impact />
    },
    {
        path: "completion",
        element: <components.Complete />
    }
];

export default routes;
