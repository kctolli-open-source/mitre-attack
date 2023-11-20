import { GrLinkNext } from "react-icons/gr";

/**
 * Render the NextStep component.
 *
 * @param {string} link - The link to the next step.
 * @param {string} text - The text to display for the next step.
 * @return {JSX.Element} The rendered NextStep component.
 */
export default function NextStep({link, text, next = true}: { link: string, text: string, next?: boolean }) {
    if (next) text = `Next Step: ${text}`;
    
    return (
        <span key="Next Step" className="next-step">
            <a href={link}>{text}</a>
            <GrLinkNext />
        </span>
    );
}
