export type indexType = {
    name: string;
    link: string;
}

export type stepsType = {
    name: string;
    bullets?: string[] | undefined;
}

export type routeType = {
    path: string;
    element: JSX.Element;
}
