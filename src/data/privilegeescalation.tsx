import { dataType } from "../type"; 

const data: dataType = {
    title: 'Privilege Escalation',
    steps: [
        'Abuse Elevation Control Mechanism',
        'Access Token Manipulation',
        'Account Manipulation',
        'Boot / Logon Autostart Execution',
        'Boot / Logon Initialization Scripts',
        'Create / Modify System Process',
        'Domain Policy Modification',
        'Escape to Host',
        'Event Triggered Execution',
        'Exploitation for Privilege Escalation',
        'Hijack Execution Flow',
        'Process Injection',
        'Scheduled Task / Job',
        'Valid Accounts',
    ],
    next: {
        link: "/defenseevasion",
        text: "Defense Evasion"
    },  
    children: 
        <div>
            <p>The adversary is trying to gain higher-level permissions.</p>
            <p>
                Privilege Escalation consists of techniques that adversaries use to gain higher-level permissions on a system or network. 
                Adversaries can often enter and explore a network with unprivileged access but require elevated permissions to follow through on their objectives. 
                Common approaches are to take advantage of system weaknesses, misconfigurations, and vulnerabilities. 
            </p>
        </div>
};

export default data;
