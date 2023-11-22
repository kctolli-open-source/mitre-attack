/**
 * Renders a blank Target anchor tag with the specified link and text.
 *
 * @param {string} link - The URL link for the anchor tag.
 * @param {string} text - The text to display within the anchor tag.
 * @return {JSX.Element} - The JSX element representing the anchor tag.
 */
export default function BlankATag({link, text}: { link: string, text: string }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            key={text}
            id={text}
        >
            {text}
        </a>
    );
}