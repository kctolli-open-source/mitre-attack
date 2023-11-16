import { stepsType } from './types';

const steps: stepsType[] = [
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

export default steps;
