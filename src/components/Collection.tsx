import React from 'react';
import steps from '../data/collection';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Collection</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to gather data of interest to their goal.</p>
                        <p>
                        Collection consists of techniques adversaries may use to gather information and the sources information is collected from that are relevant to following through on the adversary's objectives. Frequently, the next goal after collecting data is to steal (exfiltrate) the data. Common target sources include various drive types, browsers, audio, video, and email. Common collection methods include capturing screenshots and keyboard input.
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/commandcontrol" text="Command and Control" />
            </main>
        </>
    );
}
