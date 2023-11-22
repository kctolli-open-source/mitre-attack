import React from 'react';
import steps from '../data/discovery';

const Checklist = React.lazy(() => import('../common/Checklist'));
const Overview = React.lazy(() => import('../common/Overview'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h2>Discovery</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to figure out your environment.</p>
                        <p>
                            Discovery consists of techniques an adversary may use to gain knowledge about the system and internal network. 
                            These techniques help adversaries observe the environment and orient themselves before deciding how to act. 
                            They also allow adversaries to explore what they can control and what's around their entry point in order to discover how it could benefit their current objective. 
                            Native operating system tools are often used toward this post-compromise information-gathering objective.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/lateralmovement" text="Lateral Movement" />
            </section>
        </>
    );
}
