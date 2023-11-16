import React from "react";
import steps from "../data/index";

const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const StepsSection = React.lazy(() => import('../common/StepsSection'));

export default function Main() {
    return (
        <>
            <h1>Security Attack</h1>
            <main>
                <OverviewSection>
                    <p>This page is a walk through that gives a step by step checklist of the <a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK</a> framework.</p>
                </OverviewSection>
                <StepsSection>
                    <ol>
                        {
                            steps.map(step => (
                                <li key={step.name}><a href={step.link}>{step.name}</a></li>
                            ))
                        }
                    </ol>
                </StepsSection>
            </main>
        </>
    );
}
