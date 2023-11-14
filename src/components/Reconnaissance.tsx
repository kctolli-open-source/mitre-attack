import React from 'react';

const Footer = React.lazy(() => import('./Footer'));
const Checkbox = React.lazy(() => import('./Checkbox'));


export default function Reconnaissance() {
    const steps = [
        {
            name: 'Active Scanning',
            bullets: ['Scanning IP Blocks', 'Vulnerability Scanning', 'Wordlist Scanning'],
        },
        {
            name: "Gather Victim Host Information",
            bullets: ["Hardware", "Software", "Firmware", "Client Configurations"],  
        },
        {
            name: "Gather Victim Identity Information",
            bullets: ["Credentials", "Email Addresses", "Employee Names"],
        },
        {
            name: "Gather Victim Network Information",
            bullets: ["Domain Properties", "DNS", "Network Trust Dependencies", "Network Topology", "IP Addresses", "Network Security Appliances"],
        },
        {
            name: "Gather Victim Organizational Information",
            bullets: ["Determine Physical Locations", "Business Relationships", "Identify Business Tempo", "Identify Roles"]
        },
        {
            name: "Phishing for Information",
            bullets: ["Spearphishing Service", "Spearphishing Attachment", "Spearphishing Link", "Spearphishing Voice"],
        },
        {
            name: "Search Closed Sources",
            bullets: ["Threat Intel Vendors", "Purchase Technical Data"],
        },
        {
            name: "Search Open Technical Databases",
            bullets: ["DNS/Passive DNS", "WHOIS", "Digital Certificates", "CDNs", "Scan Databases"],
        },
        {
            name: "Search Open Websites/Domains",
            bullets: ["Social Media", "Search Engines", "Code Repositories"],
        },
        {
            name: "Search Victim-Owned Websites"
        }
    ];

    return (
        <>
            <h1>Reconnaissance</h1>
            <main>
                <section>
                    <h2>Overview</h2>
                    <p>The adversary is trying to gather information they can use to plan future operations.</p>
                </section>
                <section>
                    <h2>Steps</h2>
                    {steps.map(step => (
                        <Checkbox key={step.name} name={step.name} bullets={step.bullets} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
