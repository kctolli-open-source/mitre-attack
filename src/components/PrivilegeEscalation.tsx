import Common from '../common/main';
import steps from '../data/privilegeescalation';

export default function Main() {
    return (
        <>
            <h2>Privilege Escalation</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to gain higher-level permissions.</p>
                        <p>
                            Privilege Escalation consists of techniques that adversaries use to gain higher-level permissions on a system or network. 
                            Adversaries can often enter and explore a network with unprivileged access but require elevated permissions to follow through on their objectives. 
                            Common approaches are to take advantage of system weaknesses, misconfigurations, and vulnerabilities. 
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/defenseevasion", text: "Defense Evasion"}} />
            </section>
        </>
    );
}