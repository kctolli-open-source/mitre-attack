import React from 'react';
import steps from '../data/exfilration';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Exfiltration</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to steal data.</p>
                        <p>
                        Exfiltration consists of techniques that adversaries may use to steal data from your network. Once they’ve collected data, adversaries often package it to avoid detection while removing it. This can include compression and encryption. Techniques for getting data out of a target network typically include transferring it over their command and control channel or an alternate channel and may also include putting size limits on the transmission.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/impact" text="Impact" />
            </section>
        </>
    );
}
