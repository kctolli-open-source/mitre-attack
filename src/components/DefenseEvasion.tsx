import Common from '../common/main';
import steps from '../data/defenseevasion';


export default function Main() {
    return (
        <>
            <h2>Defense Evasion</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to avoid being detected.</p>
                        <p>
                            Defense Evasion consists of techniques that adversaries use to avoid detection throughout their compromise. 
                            Techniques used for defense evasion include uninstalling/disabling security software or obfuscating/encrypting data and scripts. 
                            Adversaries also leverage and abuse trusted processes to hide and masquerade their malware. 
                            Other tactics' techniques are cross-listed here when those techniques include the added benefit of subverting defenses.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/credentialaccess", text: "Credential Access"}} />
            </section>
        </>
    );
}