import React from "react";
import steps from "../data/index";

const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <section>
            <h2>Introduction</h2>
            <p>This site is a walk through that gives a step by step checklist of the <a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK</a> framework.</p>
            <Overview>
                <p>
                    MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. 
                    The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
                </p>
            </Overview>
            <article>
                <h3>Steps</h3>
                <ol>
                    {
                        steps.map(step => (
                            <li key={step.name}><a href={step.link}>{step.name}</a></li>
                        ))
                    }
                </ol>
            </article>
            <NextStep 
                link="/reconnaissance" 
                text="Lets Get Started" 
                next={false} 
            />
        </section>
    );
}
