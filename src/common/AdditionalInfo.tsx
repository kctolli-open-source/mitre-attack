import { memo } from "react";
import BlankATag from "./BlankATag";

/**
 * Renders additional information section.
 * Dependent on React.memo
 *
 * @return {JSX.Element} The JSX element representing the additional information section.
 */
const AdditionalInfo = (): JSX.Element => (
    <article>
        <h3>Additional Info</h3>
        <ul>
            <li><BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.</li>
            <li><BlankATag link="https://nvd.nist.gov/" text="National Vulnerability Database" /> contains a list of current vulnerabilities</li>
            <li><BlankATag link="https://www.cisa.gov/topics/cybersecurity-best-practices" text="Cybersecurity Best Practices" /> by Cybersecurity and Infrastructure Security Agency</li>
        </ul>
    </article>
);

export default memo(AdditionalInfo);
