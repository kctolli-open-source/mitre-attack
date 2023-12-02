import { dataType } from "../type"; 

const data: dataType = {
    title: 'Resource Development',
    steps: [
        'Acquire Access',
        'Acquire Infrastructure',
        'Compromise Accounts',
        'Compromise Infrastructure',
        'Develop Capabilities',
        'Establish Accounts',
        'Obtain Capabilities',
        'Stage Capabilities',
    ],
    next: {
        link: '/initialaccess',
        text: 'Initial Access',
    },  
    children: 
        <div>
            <p>The adversary is trying to establish resources they can use to support operations.</p>
            <p>
                Resource Development consists of techniques that involve adversaries creating, purchasing, or compromising/stealing resources that can be used to support targeting. 
                Such resources include infrastructure, accounts, or capabilities. 
                These resources can be leveraged by the adversary to aid in other phases of the adversary lifecycle, such as using purchased domains to support Command and Control, email accounts for phishing as a part of Initial Access, or stealing code signing certificates to help with Defense Evasion.
            </p>
        </div>
};

export default data;
