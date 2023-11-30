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

export type NextStepType = {
    props: {
        link: string;
        text: string; 
    }
};

export type BlankATagType = {
    link: string; 
    text: string;
};
