import dynamic from "next/dynamic";
import { memo } from "react";

/**
 * Renders the footer component
 * Dependent on React.memo
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
const Footer = (): JSX.Element => {
    const BlankATag = dynamic(() => import('./BlankATag'));

    return (
        <footer>
            <br /><hr />
            &copy; {(new Date()).getFullYear()} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <BlankATag 
                link="https://attack.mitre.org" 
                text="MITRE ATT&CK" 
            />
        </footer>
    );
}

export default memo(Footer);
