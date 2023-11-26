import steps from '../data/commandcontrol';

import Checklist from '../common/Checklist';
import Overview from '../common/Overview';
import NextStep from '../common/NextStep';

export default function Main() {
    return (
        <>
            <h2>Command and Control</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to communicate with compromised systems to control them.</p>
                        <p>
                            Command and Control consists of techniques that adversaries may use to communicate with systems under their control within a victim network. 
                            Adversaries commonly attempt to mimic normal, expected traffic to avoid detection. 
                            There are many ways an adversary can establish command and control with various levels of stealth depending on the victim's network structure and defenses.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/exfiltration" text="Exfiltration" />
            </section>
        </>
    );
}
