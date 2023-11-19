import { GrLinkNext } from "react-icons/gr";

/**
 * Render the NextStep component.
 *
 * @param {string} link - The link to the next step.
 * @param {string} text - The text to display for the next step.
 * @return {JSX.Element} The rendered NextStep component.
 */
export default function NextStep({link, text}: { link: string, text: string }) {
    return (
        <span key="Next Step" className="next-step">
            <a href={link}>Next Step: {text}</a>
            <GrLinkNext />
        </span>
    );
}
