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
    const NextStep = dynamic(() => import('./NextStep'));
    props.next.text = `Next Step: ${props.next.text}`;

    return (
        <>
            <h2>{props.title}</h2>
            <section>
                <article>
                    <h3>Overview</h3>
                    {props.children}
                </article>
                <article key="steps">
                    <h3>Steps</h3>
                    {props?.steps.map((name: string) => (
                        <div key={name} id={name}>
                            <input type="checkbox" name={name} value={name} />
                            <label htmlFor={name}> {name} </label>
                        </div>
                    ))}
                </article>
                <NextStep next={props.next}/>
            </section>
        </>
    );
}

export default memo(ComponentBuilder);
