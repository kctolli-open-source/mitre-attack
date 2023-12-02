import { dataType } from "../type"; 

const data: dataType = {
    title: 'Defense Evasion',
    steps: [
        'Abuse Elevation Control Mechanism',
        'Access Token Manipulation',
        'BITS Jobs',
        'Build Image on Host',
        'Debugger Evasion',
        'Deobfuscate / Decode Files / Information',
        'Deploy Container',
        'Direct Volume Access',
        'Domain Policy Modification',
        'Execution Guardrails',
        'Exploitation for Defense Evasion',
        'File and Directory Permissions Modification',
        'Hide Artifacts',
        'Hijack Execution Flow',
        'Impair Defenses',
        'Impersonation',
        'Indicator Removal',
        'Indirect Command Execution',
        'Masquerading',
        'Modify Authentication Process',
        'Modify Cloud Compute Infrastructure',
        'Modify Registry',
        'Modify System Image',
        'Network Boundary Bridging',
        'Obfuscated Files / Information',
        'Plist File Modification',
        'Pre-OS Boot',
        'Process Injection',
        'Reflective Code Loading',
        'Rogue Domain Controller',
        'Rootkit',
        'Subvert Trust Controls',
        'System Binary Proxy Execution',
        'System Script Proxy Execution',
        'Template Injection',
        'Traffic Signaling',
        'Trusted Developer Utilities Proxy Execution',
        'Unused / Unsupported Cloud Regions',
        'Use Alternate Authentication Material',
        'Valid Accounts',
        'Virtualization / Sandbox Evasion',
        'Weaken Encryption',
        'XSL Script Processing',
    ],
    next: {
        link: "/credentialaccess",
        text: "Credential Access"
    },  
    children: 
        <div>
            <p>The adversary is trying to avoid being detected.</p>
            <p>
                Defense Evasion consists of techniques that adversaries use to avoid detection throughout their compromise. 
                Techniques used for defense evasion include uninstalling/disabling security software or obfuscating/encrypting data and scripts. 
                Adversaries also leverage and abuse trusted processes to hide and masquerade their malware. 
                Other tactics' techniques are cross-listed here when those techniques include the added benefit of subverting defenses.
            </p>
        </div>
};

export default data;
