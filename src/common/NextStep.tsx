import { GrLinkNext } from "react-icons/gr";

type NextStepType = {
    props: {
        link: string, 
        text: string, 
    },
    next?: boolean
};

/**
 * Renders the NextStep component.
 *
 * @param {string} link - The link to navigate to.
 * @param {string} text - The text to display.
 * @param {boolean} [next=true] - Indicates whether it is the next step. Default is true.
 * @return {JSX.Element} - The rendered NextStep component.
 */
export default function NextStep({props, next = true}: NextStepType): JSX.Element {
    if (next) {props.text = `Next Step: ${props.text}`}
    
    return (
        <span key="Next Step" className="next-step">
            <a href={props.link}>{props.text}</a>
            <GrLinkNext />
        </span>
    );
}
