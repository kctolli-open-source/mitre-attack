
export default function Index() {
    const steps = [
        {
            name: 'Reconnaissance',
            link: 'reconnaissance',
        },
        {
            name: 'Resource Development',
            link: 'resourcedevelopment',
        },
        {
            name: 'Initial Access',
            link: 'initialaccess',
        },
        {
            name: 'Execution',
            link: 'execution',
        },
        {
            name: 'Persistence',
            link: 'persistence',
        },
        {
            name: 'Privilege Escalation',
            link: 'privilegeescalation',
        },
        {
            name: 'Defense Evasion',
            link: 'defenseevasion',
        },
        {
            name: 'Credential Access',
            link: 'credentialaccess',
        },
        {
            name: 'Discovery',
            link: 'discovery',
        },
        {
            name: 'Lateral Movement',
            link: 'lateralmovement',
        },
        {
            name: 'Collection',
            link: 'collection',
        },
        {
            name: 'Command and Control',
            link: 'commandandcontrol',
        },
        {
            name: 'Exfiltration',
            link: 'exfiltration',
        },
        {
            name: 'Impact',
            link: 'impact',
        }
    ];

    return (
        <>
            <h1>Security Attack</h1>
            <main>
                <section>
                    <h2>Overview</h2>
                    <p>
                        This page is a walk through that gives a step by step checklist of the MITRE ATT&CK framework.
                    </p>
                    <a href="https://attack.mitre.org/">MITRE ATT&CK</a>
                </section>
                <section>
                    <h2>Steps</h2>
                    <ol>
                        {
                            steps.map(step => (
                                <li key={step.name}><a href={step.link}>{step.name}</a></li>
                            ))
                        }
                    </ol>
                </section>
            </main>
        </>
    );
}
