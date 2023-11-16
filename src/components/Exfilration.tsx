import React from 'react';
import steps from '../data/resourcedevelopment';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const StepsSection = React.lazy(() => import('../common/StepsSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Exfiltration</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to steal data.</p>
                        <p>
                        Exfiltration consists of techniques that adversaries may use to steal data from your network. Once they’ve collected data, adversaries often package it to avoid detection while removing it. This can include compression and encryption. Techniques for getting data out of a target network typically include transferring it over their command and control channel or an alternate channel and may also include putting size limits on the transmission.
                        </p>
                    </>
                </OverviewSection>
                <StepsSection>
                    <Checklist steps={steps} />
                </StepsSection>
                <NextStep link="/impact" text="Impact" />
            </main>
        </>
    );
}
