import { dataType } from "../type"; 

const data: dataType = {
    title: "Command and Control",
    steps: [
        'Application Layer Protocol',
        'Communication Through Removable Media',
        'Content Injection',
        'Data Encoding',
        'Data Obfuscation',
        'Dynamic Resolution',
        'Encrypted Channel',
        'Fallback Channels',
        'Ingress Tool Transfer',
        'Multi-Stage Channels',
        'Non-Application Layer Protocol',
        'Non-Standard Port',
        'Protocol Tunneling',
        'Proxy',
        'Remote Access Software',
        'Traffic Signaling',
        'Web Service',
    ],
    next: {
        link: "/exfiltration",
        text: "Exfiltration"
    },
    children: 
        <div>
            <p>The adversary is trying to communicate with compromised systems to control them.</p>
            <p>
                Command and Control consists of techniques that adversaries may use to communicate with systems under their control within a victim network. 
                Adversaries commonly attempt to mimic normal, expected traffic to avoid detection. 
                There are many ways an adversary can establish command and control with various levels of stealth depending on the victim&apos;s network structure and defenses.
            </p>
        </div>
} 

export default data;