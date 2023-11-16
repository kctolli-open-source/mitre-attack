import React from 'react';
import steps from '../data/initialaccess';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Initial Access</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to get into your network.</p>
                        <p>
                            Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. 
                            Techniques used to gain a foothold include targeted spearphishing and exploiting weaknesses on public-facing web servers. 
                            Footholds gained through initial access may allow for continued access, like valid accounts and use of external remote services, or may be limited-use due to changing passwords.
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/execution" text="Execution" />
            </main>
        </>
    );
}