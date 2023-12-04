import { dataType } from "../type"; 

const data: dataType = {
    title: 'Execution',
    steps: [
        'Cloud Administration Command',
        'Command and Scripting Interpreter',
        'Container Administration Command',
        'Deploy Container',
        'Exploitation for Client Execution',
        'Inter-Process Communication',
        'Native API',
        'Scheduled Task/Job',
        'Serverless Execution',
        'Shared Modules',
        'Software Deployment Tools',
        'System Services',
        'User Execution',
        'Windows Management Instrumentation',
    ],
    next: {
        link: "/persistence",
        text: "Persistence"
    },  
    children: 
        <div>
            <p>The adversary is trying to run malicious code.</p>
            <p>
                Execution consists of techniques that result in adversary-controlled code running on a local or remote system. 
                Techniques that run malicious code are often paired with techniques from all other tactics to achieve broader goals, like exploring a network or stealing data. 
                For example, an adversary might use a remote access tool to run a PowerShell script that does Remote System Discovery.
            </p>
        </div>
};

export default data;
