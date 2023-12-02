import { lazy } from 'react';

import { routeType } from '../type';
import Data from '../data/main';

export default class Components {
    public static readonly ComponentBuilder = lazy(() => import('./ComponentBuilder'));
    public static readonly Complete = lazy(() => import('./Complete')); 
    public static readonly Index = lazy(() => import('./Home'));

    public static readonly routes: routeType[] = [
        {
            path: "*",
            element: <Components.Index />
        },
        {
            path: "reconnaissance",
            element: <Components.ComponentBuilder props={Data.reconnaissance} />
        },
        {
            path: "resourcedevelopment",
            element: <Components.ComponentBuilder props={Data.resourcedevelopment} />
        },
        {
            path: "initialaccess",
            element: <Components.ComponentBuilder props={Data.initialaccess} />
        },
        {
            path: "execution",
            element: <Components.ComponentBuilder props={Data.execution} />
        },
        {
            path: "persistence",
            element: <Components.ComponentBuilder props={Data.persistence} />
        },
        {
            path: "privilegeescalation",
            element: <Components.ComponentBuilder props={Data.privilegeescalation} />
        },
        {
            path: "defenseevasion",
            element: <Components.ComponentBuilder props={Data.defenseevasion} />
        },
        {
            path: "credentialaccess",
            element: <Components.ComponentBuilder props={Data.credentialaccess} />
        },
        {
            path: "discovery",
            element: <Components.ComponentBuilder props={Data.discovery} />
        },
        {
            path: "lateralmovement",
            element: <Components.ComponentBuilder props={Data.lateralmovement} />
        },
        {
            path: "collection",
            element: <Components.ComponentBuilder props={Data.collection} />
        },
        {
            path: "commandcontrol",
            element: <Components.ComponentBuilder props={Data.commandcontrol} />
        },
        {
            path: "exfiltration",
            element: <Components.ComponentBuilder props={Data.exfilration} />
        }, 
        {
            path: "impact",
            element: <Components.ComponentBuilder props={Data.impact} />
        },
        {
            path: "completion",
            element: <Components.Complete />
        }
    ]
}
