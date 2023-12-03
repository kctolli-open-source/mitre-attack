import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";

import BlankATag from "./BlankATag";
import steps from "../data/index";

/**
 * Renders the Home component.
 * Dependent on React.useState and react-icons.GrLinkNext
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
export default function Home(): JSX.Element {
    const [showSteps, setShowSteps] = useState(false);

    return (
        <section>
            <h2>Introduction</h2>
            <p>This site is a walk through that gives a step by step checklist of the <BlankATag link="https://attack.mitre.org/" text="MITRE ATT&CK" /> framework.</p>
            <article>
                <h3>Overview</h3>
                <p>
                    MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. 
                    The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
                </p>
                <p>
                    MITRE ATT&CK® Framework contains 14 techniques and tactics. To view the steps click: <button onClick={() => setShowSteps(showSteps ? false : true)}>here</button>
                </p>
                { 
                    showSteps && 
                    <div> 
                        <h4>Steps</h4>
                        <ol> {steps.map(step => (<li key={step?.name}><a href={step?.link}>{step?.name}</a></li>))} </ol>
                    </div>
                }
            </article>
            <article>
                <h3>Additional Info</h3>
                <ul>
                    <li><BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.</li>
                    <li><BlankATag link="https://nvd.nist.gov/" text="National Vulnerability Database" /> contains a list of current vulnerabilities</li>
                    <li><BlankATag link="https://www.cisa.gov/topics/cybersecurity-best-practices" text="Cybersecurity Best Practices" /> by Cybersecurity and Infrastructure Security Agency</li>
                </ul>
            </article>
            <span key="Get Started" className="next-step">
                <a href="/reconnaissance">Lets Get Started</a>
                <GrLinkNext />
            </span>
        </section>
    );
}
