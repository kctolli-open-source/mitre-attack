import React from "react";
import steps from "../data/index";

const Overview = React.lazy(() => import('../common/Overview'));

export default function Main() {
    return (
        <>
            <section>
                <Overview>
                    <p>This page is a walk through that gives a step by step checklist of the <a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK</a> framework.</p>
                </Overview>
                <section>
                    <h2>Steps</h2>
                    <ol>
                        {
                            steps.map(step => (
                                <li key={step.name}><a href={step.link}>{step.name}</a></li>
                            ))
                        }
                    </ol>
                </section>
            </section>
        </>
    );
}
