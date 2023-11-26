import steps from '../data/lateralmovement';

import Checklist from '../common/Checklist';
import Overview from '../common/Overview';
import NextStep from '../common/NextStep';

export default function Main() {
    return (
        <>
            <h2>Lateral Movements</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to move through your environment.</p>
                        <p>
                            Lateral Movement consists of techniques that adversaries use to enter and control remote systems on a network. 
                            Following through on their primary objective often requires exploring the network to find their target and subsequently gaining access to it. 
                            Reaching their objective often involves pivoting through multiple systems and accounts to gain. 
                            Adversaries might install their own remote access tools to accomplish Lateral Movement or use legitimate credentials with native network and operating system tools, which may be stealthier.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/collection" text="Collection" />
            </section>
        </>
    );
}
