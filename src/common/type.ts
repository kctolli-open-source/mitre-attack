export type componentBuilderType = {
    props: {
        title: string;
        children: JSX.Element;
        steps: any[];
        next: {
            link: string;
            text: string;
        }
    }
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

export type routeType = {
    path: string;
    element: JSX.Element;
}

export type blankATagType = {
    link: string; 
    text: string;
};

export type indexType = {
    link: string;
    name: string;
}

export type nextStepType = {
    next: {
        link: string; 
        text: string;
    }
}
