import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/defenseevasion';


export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Defense Evasion",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to avoid being detected.</p>
                        <p>
                            Defense Evasion consists of techniques that adversaries use to avoid detection throughout their compromise. 
                            Techniques used for defense evasion include uninstalling/disabling security software or obfuscating/encrypting data and scripts. 
                            Adversaries also leverage and abuse trusted processes to hide and masquerade their malware. 
                            Other tactics' techniques are cross-listed here when those techniques include the added benefit of subverting defenses.
                        </p>
                    </>,
                next: {
                    link: "/credentialaccess",
                    text: "Credential Access"
                }
            }}
        />
    );
}