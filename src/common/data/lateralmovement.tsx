import { dataType } from "../type"; 

const data: dataType = {
    title: 'Lateral Movement',
    steps: [
        'Exploitation of Remote Services',
        'Internal Spearphishing',
        'Lateral Tool Transfer',
        'Remote Service Session Hijacking',
        'Remote Services',
        'Replication Through Removable Media',
        'Software Deployment Tools',
        'Taint Shared Content',
        'Use Alternate Authentication Material',
    ],
    next: {
        link: "/collection",
        text: "Collection"
    },  
    children: 
        <div>
            <p>The adversary is trying to move through your environment.</p>
            <p>
                Lateral Movement consists of techniques that adversaries use to enter and control remote systems on a network. 
                Following through on their primary objective often requires exploring the network to find their target and subsequently gaining access to it. 
                Reaching their objective often involves pivoting through multiple systems and accounts to gain. 
                Adversaries might install their own remote access tools to accomplish Lateral Movement or use legitimate credentials with native network and operating system tools, which may be stealthier.
            </p>
        </div>
};

export default data;
