/* eslint-disable react-refresh/only-export-components */
import { GrLinkNext } from "react-icons/gr";
import { memo } from "react";

import { componentBuilderType } from "./type";

/**
 * Builds Components for each route.
 * @param props the data for the component
 * @returns {JSX.Element} The JSX element representing the Component.
 */
const ComponentBuilder = ({props}: componentBuilderType): JSX.Element => (
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
            <a href={props.next.link} key={`Next Step ${props.next.text}`} className="next-step">
                Next Step: {props.next.text}
                <GrLinkNext />
            </a>
        </section>
    </>
);


export default memo(ComponentBuilder);
