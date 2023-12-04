import React from 'react';
import { routeType } from '../type';
import Data from '../data/main';

export default class Components {
    public static readonly StrictMode = React.StrictMode;
    public static readonly Suspense = React.Suspense;
    public static readonly memo = React.memo;

    private static readonly ComponentBuilder = React.lazy(() => import('./ComponentBuilder'));
    private static readonly Complete = React.lazy(() => import('./Complete')); 
    private static readonly Index = React.lazy(() => import('./Home'));
    public  static readonly Footer = React.lazy(() => import('./Footer'));

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
            path: "complete",
            element: <Components.Complete />
        }
    ];
}
