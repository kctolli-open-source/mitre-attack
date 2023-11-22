import React from 'react';
import steps from '../data/persistence';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Persistence</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to maintain their foothold.</p>
                        <p>
                            Persistence consists of techniques that adversaries use to keep access to systems across restarts, changed credentials, and other interruptions that could cut off their access. 
                            Techniques used for persistence include any access, action, or configuration changes that let them maintain their foothold on systems, such as replacing or hijacking legitimate code or adding startup code.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/privilegeescalation" text="Privilege Escalation" />
            </section>
        </>
    );
}