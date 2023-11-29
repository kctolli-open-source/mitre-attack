import BlankATag from "./BlankATag";

/**
 * Renders the footer component.
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export default function Footer() {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <br /><hr />
            &copy; {year} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <BlankATag 
                link="https://attack.mitre.org" 
                text="MITRE ATT&CK" 
            />
        </footer>
    );
}