import { dataType } from "../type"; 

const data: dataType = {
    title: "Credential Access",
    steps: [
        'Adversary in the Middle',
        'Brute Force',
        'Credentials from Password Stores',
        'Exploitation for Credential Access',
        'Forced Authentication',
        'Forge Web Credentials',
        'Input Capture',
        'Modify Authentication Process',
        'Multi-Factor Authentication Interception',
        'Multi-Factor Authentication Request Generation',
        'Network Sniffing',
        'OS Credential Dumping',
        'Steal Application Access Token',
        'Steal / Forge Authentication Certificates',
        'Steal / Forge Kerberos Tickets',
        'Steal Web Session Cookies',
        'Unsecured Credentials',
    ],
    next: {
        link: "/discovery",
        text: "Discovery"
    },
    children: 
        <div>
            <p>The adversary is trying to steal account names and passwords.</p>
            <p>
                Credential Access consists of techniques for stealing credentials like account names and passwords. 
                Techniques used to get credentials include keylogging or credential dumping. 
                Using legitimate credentials can give adversaries access to systems, make them harder to detect, and provide the opportunity to create more accounts to help achieve their goals.
            </p>
        </div>
} 

export default data;

