import React from "react";

const BlankATag = React.lazy(() => import('../common/BlankATag'));

/**
 * Renders the Footer component.
 *
 * @return {JSX.Element} The rendered Footer component.
 */
export default function Footer() {
    return (
        <footer>
            <br /><hr />
            &copy; {(new Date()).getFullYear()} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <BlankATag link="https://attack.mitre.org" text="MITRE ATT&CK" />
        </footer>
    );    
}
