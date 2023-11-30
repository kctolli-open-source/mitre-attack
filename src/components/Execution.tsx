import Common from '../common/main';
import steps from '../data/execution';

export default function Main() {
    return (
        <>
            <h2>Execution</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to run malicious code.</p>
                        <p>
                            Execution consists of techniques that result in adversary-controlled code running on a local or remote system. 
                            Techniques that run malicious code are often paired with techniques from all other tactics to achieve broader goals, like exploring a network or stealing data. 
                            For example, an adversary might use a remote access tool to run a PowerShell script that does Remote System Discovery.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/persistence", text: "Persistence"}} />
            </section>
        </>
    );
}
