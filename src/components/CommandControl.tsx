import Common from '../common/main';
import steps from '../data/commandcontrol';

export default function Main() {
    return (
        <>
            <h2>Command and Control</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to communicate with compromised systems to control them.</p>
                        <p>
                            Command and Control consists of techniques that adversaries may use to communicate with systems under their control within a victim network. 
                            Adversaries commonly attempt to mimic normal, expected traffic to avoid detection. 
                            There are many ways an adversary can establish command and control with various levels of stealth depending on the victim's network structure and defenses.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/exfiltration", text: "Exfiltration"}} />
            </section>
        </>
    );
}
