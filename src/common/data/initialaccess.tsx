import { dataType } from "../type"; 

const data: dataType = {
    title: 'Initial Access',
    steps: [
        'Content Injection',
        'Drive-by Compromise',
        'Exploit Public-Facing Application',
        'External Remote Services',
        'Hardware Additions',
        'Phishing',
        'Replication Through Removable Media',
        'Supply Chain Compromise',
        'Trusted Relationship',
        'Valid Accounts',
    ],
    next: {
        link: "/execution",
        text: "Execution"
    },  
    children: 
        <div>
            <p>The adversary is trying to get into your network.</p>
            <p>
                Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. 
                Techniques used to gain a foothold include targeted spearphishing and exploiting weaknesses on public-facing web servers. 
                Footholds gained through initial access may allow for continued access, like valid accounts and use of external remote services, or may be limited-use due to changing passwords.
            </p>
        </div>
};

export default data;
