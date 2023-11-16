import React from 'react';
import steps from '../data/lateralmovement';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Lateral Movements</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to move through your environment.</p>
                        <p>
                        Lateral Movement consists of techniques that adversaries use to enter and control remote systems on a network. Following through on their primary objective often requires exploring the network to find their target and subsequently gaining access to it. Reaching their objective often involves pivoting through multiple systems and accounts to gain. Adversaries might install their own remote access tools to accomplish Lateral Movement or use legitimate credentials with native network and operating system tools, which may be stealthier.
                        </p>
                    </>
                </OverviewSection>
                <Checklist steps={steps} />
                <NextStep link="/collection" text="Collection" />
            </main>
        </>
    );
}
