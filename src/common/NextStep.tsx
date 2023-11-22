import { GrLinkNext } from "react-icons/gr";


/**
 * Renders the NextStep component.
 *
 * @param {string} link - The link to navigate to.
 * @param {string} text - The text to display.
 * @param {boolean} [next=true] - Indicates whether it is the next step. Default is true.
 * @return {JSX.Element} - The rendered NextStep component.
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
