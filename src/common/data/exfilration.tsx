import { dataType } from "../type"; 

const data: dataType = {
    title: 'Exfiltration',
    steps: [
        'Automated Exfiltration',
        'Data Transfer Size Limits',
        'Exfiltration Over Alternative Protocol',
        'Exfiltration Over C2 Channel',
        'Exfiltration Over Other Network Medium',
        'Exfiltration Over Physical Medium',
        'Exfiltration Over Web Service',
        'Scheduled Transfer',
        'Transfer Data to Cloud Account',
    ],
    next: {
        link: "/impact",
        text: "Impact"
    },  
    children: 
        <div>
            <p>The adversary is trying to steal data.</p>
            <p>
                Exfiltration consists of techniques that adversaries may use to steal data from your network. 
                Once they&apos;ve collected data, adversaries often package it to avoid detection while removing it. 
                This can include compression and encryption. 
                Techniques for getting data out of a target network typically include transferring it over their command and control channel or an alternate channel and may also include putting size limits on the transmission.
            </p>
        </div>
};

export default data;
