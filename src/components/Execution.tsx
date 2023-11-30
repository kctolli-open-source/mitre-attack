import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/execution';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Execution",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to run malicious code.</p>
                        <p>
                            Execution consists of techniques that result in adversary-controlled code running on a local or remote system. 
                            Techniques that run malicious code are often paired with techniques from all other tactics to achieve broader goals, like exploring a network or stealing data. 
                            For example, an adversary might use a remote access tool to run a PowerShell script that does Remote System Discovery.
                        </p>
                    </>,
                next: {
                    link: "/persistence",
                    text: "Persistence"
                }
            }}
        />
    );
}
