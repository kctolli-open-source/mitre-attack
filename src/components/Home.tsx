import React from "react";

const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));
const StepsLinks = React.lazy(() => import('../common/StepsLinks'));
const BlankATag = React.lazy(() => import('../common/BlankATag'));

export default function Main() {
    return (
        <section>
            <h2>Introduction</h2>
            <p>This site is a walk through that gives a step by step checklist of the <BlankATag link="https://attack.mitre.org/" text="MITRE ATT&CK" /> framework.</p>
            <Overview>
                <>
                    <p>
                        MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. 
                        The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
                    </p>
                    <p>
                        Also see <BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.
                    </p>
                </>
            </Overview>
            <StepsLinks />
            <NextStep 
                link="/reconnaissance" 
                text="Lets Get Started" 
                next={false} 
            />
        </section>
    );
}
