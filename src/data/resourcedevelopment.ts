import { stepsType } from './types';

const steps: stepsType[] = [
    {
        name: 'Acquire Access',
    },
    {
        name: "Acquire Infrastructure",
        bullets: ["Domains", "DNS Server", "Virtual Private Server", "Server", "Botnet", "Web Services", "Serverless", "Malvertising"],  
    },
    {
        name: "Compromise Accounts",
        bullets: ["Social Media Accounts", "Email Accounts", "Cloud Accounts"]
    },
    {
        name: "Compromise Infrastructure",
        bullets: ["Domains", "DNS Server", "Virtual Private Server", "Server", "Botnet", "Web Services", "Serverless", "Malvertising"], 
    },
    {
        name: "Develop Capabilities",
        bullets: ["Malware", "Code Signing Certificates", "Digital Certificates", "Exploits"],
    },
    {
        name: "Establish Accounts",
        bullets: ["Social Media Accounts", "Email Accounts", "Cloud Accounts"]
    },
    {
        name: "Obtain Capabilities",
        bullets: ["Malware", "Tool", "Code Signing Certificates", "Digital Certificates", "Exploits", "Vulnerabilities"],
    },
    {
        name: "Stage Capabilities",
        bullets: ["Upload Malware", "Upload Tool", "Install Digital Certificate", "Drive-by Target", "Link Target", "SEO Poisoning"],
    }
];

export default steps;
