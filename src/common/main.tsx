import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

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
    public static BlankATag = React.lazy(() => import('./BlankATag'));
    public static Checklist = React.lazy(() => import('./Checklist'));
    public static NextStep = React.lazy(() => import('./NextStep')); 
    public static Overview = React.lazy(() => import('./Overview'));
    public static StepsList = React.lazy(() => import('./StepsList'));

    // Misc
    public static year = (new Date()).getFullYear();
    public static imageLink = "https://media2.giphy.com/media/mGK1g88HZRa2FlKGbz/200.webp?cid=ecf05e47fdfw7zenpr1k5baa6xhqjcfmtb7gu7g9q1ltcjbj&ep=v1_gifs_search&rid=200.webp&ct=g";
}
