import { dataType } from "../type"; 

const data: dataType = {
    title: 'Persistence',
    steps: [
        'Account Manipulation',
        'Bits Jobs',
        'Boot / Logon Autostart Execution',
        'Boot / Logon Initialization Scripts',
        'Browser Extensions', 
        'Compromise Client Software Binary',
        'Create Account',
        'Create and Modify System Process',
        'Event Triggered Execution',
        'External Remote Services',
        'Hijack Execution Flow',
        'Modify Authentication Process',
        'Office Application Startup',
        'Power Settings',
        'Pre-OS Boot',
        'Scheduled Task / Job',
        'Server Software Component',
        'Traffic Signaling',
        'Valid Accounts',
    ],
    next: {
        link: "/privilegeescalation",
        text: "Privilege Escalation"
    },  
    children: 
        <div>
            <p>The adversary is trying to maintain their foothold.</p>
            <p>
                Persistence consists of techniques that adversaries use to keep access to systems across restarts, changed credentials, and other interruptions that could cut off their access. 
                Techniques used for persistence include any access, action, or configuration changes that let them maintain their foothold on systems, such as replacing or hijacking legitimate code or adding startup code.
            </p>
        </div>
};

export default data;
