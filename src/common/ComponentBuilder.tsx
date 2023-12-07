import dynamic from "next/dynamic";
import { memo } from "react";

import { componentBuilderType } from "./type";

/**
 * Builds Components for each route.
 * Dependent on react-icons.GrLinkNext and React.memo
 * 
 * @param props the data for the component
 * @returns {JSX.Element} The JSX element representing the Component.
 */
const ComponentBuilder = ({props}: componentBuilderType): JSX.Element => {
    const Overview = dynamic(() => import('./Overview'));
    const NextStep = dynamic(() => import('./NextStep'));
    const Steps = dynamic(() => import('./Steps'));

    return (
        <>
            <h2>{props.title}</h2>
            <section>
                <Overview>
                    {props.children}
                </Overview>
                <Steps steps={props.steps} />
                <NextStep 
                    next={{
                        link: props.next.link,
                        text: `Next Step: ${props.next.text}`
                    }}
                />
            </section>
        </>
    );
}

export default memo(ComponentBuilder);
