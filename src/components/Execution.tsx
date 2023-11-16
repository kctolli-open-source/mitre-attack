import React from 'react';
import steps from '../data/resourcedevelopment';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const StepsSection = React.lazy(() => import('../common/StepsSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Execution</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to run malicious code.</p>
                        <p>
                            Execution consists of techniques that result in adversary-controlled code running on a local or remote system. 
                            Techniques that run malicious code are often paired with techniques from all other tactics to achieve broader goals, like exploring a network or stealing data. 
                            For example, an adversary might use a remote access tool to run a PowerShell script that does Remote System Discovery.
                        </p>
                    </>
                </OverviewSection>
                <StepsSection>
                    <Checklist steps={steps} />
                </StepsSection>
                <NextStep link="/persistence" text="Persistence" />
            </main>
        </>
    );
}
