import React from 'react';
import steps from '../data/resourcedevelopment';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Persistence</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to maintain their foothold.</p>
                        <p>
                            Persistence consists of techniques that adversaries use to keep access to systems across restarts, changed credentials, and other interruptions that could cut off their access. Techniques used for persistence include any access, action, or configuration changes that let them maintain their foothold on systems, such as replacing or hijacking legitimate code or adding startup code.
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/privilegeescalation" text="Privilege Escalation" />
            </main>
        </>
    );
}