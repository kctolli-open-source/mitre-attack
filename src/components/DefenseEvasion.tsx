import React from 'react';
import steps from '../data/defenseevasion';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Defense Evasion</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to avoid being detected.</p>
                        <p>
                        Defense Evasion consists of techniques that adversaries use to avoid detection throughout their compromise. Techniques used for defense evasion include uninstalling/disabling security software or obfuscating/encrypting data and scripts. Adversaries also leverage and abuse trusted processes to hide and masquerade their malware. Other tactics’ techniques are cross-listed here when those techniques include the added benefit of subverting defenses.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/credentialaccess" text="Credential Access" />
            </section>
        </>
    );
}