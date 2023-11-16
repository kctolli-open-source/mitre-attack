import React from 'react';
import steps from '../data/resourcedevelopment';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Resource Development</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to establish resources they can use to support operations.</p>
                        <p>
                            Resource Development consists of techniques that involve adversaries creating, purchasing, or compromising/stealing resources that can be used to support targeting. 
                            Such resources include infrastructure, accounts, or capabilities. 
                            These resources can be leveraged by the adversary to aid in other phases of the adversary lifecycle, such as using purchased domains to support Command and Control, email accounts for phishing as a part of Initial Access, or stealing code signing certificates to help with Defense Evasion.
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/initialaccess" text="Initial Access" />
            </main>
        </>
    );
}
