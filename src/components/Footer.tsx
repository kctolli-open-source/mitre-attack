/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

import BlankATag from './BlankATag';

/**
 * Renders the footer component
 * Dependent on React.memo
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
const Footer = (): JSX.Element => (
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

export default memo(Footer);
