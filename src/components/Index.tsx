import React from 'react';

const Footer = React.lazy(() => import('./Footer'));

export default function Index() {
    const steps = [
        'Reconnaissance',
        'Resource Development',
        'Initial Access',
        'Execution',
        'Persistence',
        'Privilege Escalation',
        'Defense Evasion',
        'Credential Access',
        'Discovery',
        'Lateral Movement',
        'Collection',
        'Command and Control',
        'Exfiltration',
        'Impact',
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
                                <li key={step}>{step}</li>
                            ))
                        }
                    </ol>
                </section>
            </main>
            <Footer />
        </>
    );
}
