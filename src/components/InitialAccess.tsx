import React from 'react';
import steps from '../data/initialaccess';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Initial Access</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to get into your network.</p>
                        <p>
                            Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. 
                            Techniques used to gain a foothold include targeted spearphishing and exploiting weaknesses on public-facing web servers. 
                            Footholds gained through initial access may allow for continued access, like valid accounts and use of external remote services, or may be limited-use due to changing passwords.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/execution" text="Execution" />
            </section>
        </>
    );
}