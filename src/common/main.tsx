import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import routes from "./routes";

import BlankATag from "./BlankATag";
import Checklist from "./Checklist";
import NextStep from "./NextStep";
import Overview from "./Overview";
import StepsList from "./StepsList";

export default class Common {
    // React
    public static React = React;
    public static lazy = React.lazy;
    public static StrictMode = React.StrictMode; 
    public static useState = React.useState;
    public static useEffect = React.useEffect;
    public static Suspense = React.Suspense;

    // React Router Dom
    public static BrowserRouter = BrowserRouter;
    public static Routes = Routes;
    public static Route = Route;

    // Common Components
    public static BlankATag = BlankATag;
    public static Checklist = Checklist;
    public static NextStep = NextStep; 
    public static Overview = Overview;
    public static StepsList = StepsList;

    /**
     * Renders the Router component.
     *
     * @returns {JSX.Element} The JSX element representing the Router.
     */
     
    public static Router = (): JSX.Element => {
        return (
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <BrowserRouter>
                    <Routes>
                        {routes.map(route => (
                            <Route 
                                key={route?.path} 
                                path={route?.path} 
                                element={route?.element} 
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        );
    }

    /**
     * Renders the footer component.
     *
     * @returns {JSX.Element} The JSX element representing the footer.
     */
    public static Footer = (): JSX.Element => (
        <footer>
            <br /><hr />
            &copy; {Common.year} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <Common.BlankATag 
                link="https://attack.mitre.org" 
                text="MITRE ATT&CK" 
            />
        </footer>
    );

    // Misc
    public static routes = routes;
    public static year = (new Date()).getFullYear();
    public static imageLink = "https://media2.giphy.com/media/mGK1g88HZRa2FlKGbz/200.webp?cid=ecf05e47fdfw7zenpr1k5baa6xhqjcfmtb7gu7g9q1ltcjbj&ep=v1_gifs_search&rid=200.webp&ct=g";
}
