import React from 'react';
import steps from '../data/privilegeescalation';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Privilege Escalation</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to gain higher-level permissions.</p>
                        <p>
                            Privilege Escalation consists of techniques that adversaries use to gain higher-level permissions on a system or network. Adversaries can often enter and explore a network with unprivileged access but require elevated permissions to follow through on their objectives. Common approaches are to take advantage of system weaknesses, misconfigurations, and vulnerabilities. 
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/defenseevasion" text="Defense Evasion" />
            </section>
        </>
    );
}