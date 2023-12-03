 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, StrictMode, lazy, memo } from 'react';
import { createRoot } from 'react-dom/client';

import { routeType } from '../type';
import Data from '../data/main';

const imageLink = "https://media2.giphy.com/media/mGK1g88HZRa2FlKGbz/200.webp?cid=ecf05e47fdfw7zenpr1k5baa6xhqjcfmtb7gu7g9q1ltcjbj&ep=v1_gifs_search&rid=200.webp&ct=g";

export default class Components {
    public static readonly createRoot = createRoot;
    public static readonly StrictMode = StrictMode;

    private static readonly ComponentBuilder = lazy(() => import('./ComponentBuilder'));
    private static readonly Complete = lazy(() => import('./Complete')); 
    private static readonly Index = lazy(() => import('./Home'));

    private static readonly RouteBuilder = (): JSX.Element => (
        <Suspense fallback={<h2>Loading ...</h2>}>
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
        </Suspense>
    );

    private static readonly routes: routeType[] = [
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
            element: <Components.Complete imageLink={imageLink} />
        }
    ];

    public static readonly Footer = lazy(() => import('./Footer'));
    public static readonly Router = memo(Components.RouteBuilder);
}
