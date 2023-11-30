import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/commandcontrol';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Command and Control",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to communicate with compromised systems to control them.</p>
                        <p>
                            Command and Control consists of techniques that adversaries may use to communicate with systems under their control within a victim network. 
                            Adversaries commonly attempt to mimic normal, expected traffic to avoid detection. 
                            There are many ways an adversary can establish command and control with various levels of stealth depending on the victim's network structure and defenses.
                        </p>
                    </>,
                next: {
                    link: "/exfiltration",
                    text: "Exfiltration"
                }
            }}
        />
    );
}
