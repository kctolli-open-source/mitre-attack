import { dataType } from "../type"; 

const data: dataType = {
    title: 'Discovery',
    steps: [
        'Account Discovery',
        'Application Window Discovery',
        'Browser Information Discovery',
        'Cloud Infrastructure Discovery',
        'Cloud Service Dashboard',
        'Cloud Service Discovery',
        'Cloud Storage Object Discovery',
        'Container and Resource Discovery',
        'Debugger Evasion',
        'Device Driver Discovery',
        'Domain Trust Discovery',
        'File and Directory Discovery',
        'Group Policy Discovery',
        'Log Enumeration',
        'Network Service Discovery',
        'Network Share Discovery',
        'Network Sniffing',
        'Password Policy Discovery',
        'Peripheral Device Discovery',
        'Permission Groups Discovery',
        'Process Discovery',
        'Query Registry',
        'Remote System Discovery',
        'Software Discovery',
        'System Information Discovery',
        'System Location Discovery',
        'System Network Configuration Discovery',
        'System Network Connections Discovery',
        'System Owner / User Discovery',
        'System Service Discovery',
        'System Time Discovery',
        'Virtualization / Sandbox Evasion',
    ],
    next: {
        link: "/lateralmovement",
        text: "Lateral Movement"
    },  
    children: 
        <div>
            <p>The adversary is trying to figure out your environment.</p>
            <p>
                Discovery consists of techniques an adversary may use to gain knowledge about the system and internal network. 
                These techniques help adversaries observe the environment and orient themselves before deciding how to act. 
                They also allow adversaries to explore what they can control and what's around their entry point in order to discover how it could benefit their current objective. 
                Native operating system tools are often used toward this post-compromise information-gathering objective.
            </p>
        </div>
};

export default data;
