import React from 'react';
import steps from '../data/privilegeescalation';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Privilege Escalation</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to gain higher-level permissions.</p>
                        <p>
                            Privilege Escalation consists of techniques that adversaries use to gain higher-level permissions on a system or network. Adversaries can often enter and explore a network with unprivileged access but require elevated permissions to follow through on their objectives. Common approaches are to take advantage of system weaknesses, misconfigurations, and vulnerabilities. 
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/defenseevasion" text="Defense Evasion" />
            </main>
        </>
    );
}