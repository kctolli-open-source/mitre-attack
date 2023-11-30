/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

import BlankATag from '../common/BlankATag';

const Footer = () => (
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
