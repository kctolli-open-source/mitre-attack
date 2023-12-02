export type componentBuilderType = {
    props: {
        title: string;
        children: JSX.Element;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        steps: any[];
        next: {
            link: string;
            text: string;
        }
    }
}

export type routeType = {
    path: string;
    element: JSX.Element;
}

export type BlankATagType = {
    link: string; 
    text: string;
};

export type indexType = {
    link: string;
    name: string;
}

export type dataType = {
    title: string;
    steps: string[];
    next: {
        link: string;
        text: string;
    };
    children: JSX.Element;
}
