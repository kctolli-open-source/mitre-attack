import React from 'react';
import steps from '../data/reconnaissance';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const StepsSection = React.lazy(() => import('../common/StepsSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Reconnaissance</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to gather information they can use to plan future operations.</p>
                        <p>
                            Reconnaissance consists of techniques that involve adversaries actively or passively gathering information that can be used to support targeting. 
                            Such information may include details of the victim organization, infrastructure, or staff/personnel. 
                            This information can be leveraged by the adversary to aid in other phases of the adversary lifecycle, such as using gathered information to plan and execute Initial Access, to scope and prioritize post-compromise objectives, or to drive and lead further Reconnaissance efforts.
                        </p>
                    </>
                </OverviewSection>
                <StepsSection>
                    <Checklist steps={steps} />
                </StepsSection>
                <NextStep link="/resourcedevelopment" text="Resource Development" />
            </main>
        </>
    );
}
