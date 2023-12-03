import { dataType } from "../type"; 

const data: dataType = {
    title: 'Impact',
    steps: [
        'Account Access Removal',
        'Data Destruction',
        'Data Encrypted for Impact',
        'Data Manipulation',
        'Defacement',
        'Disk Wipe',
        'Endpoint Denial of Service',
        'Financial Theft',
        'Firmware Corruption',
        'Inhibit System Recovery',
        'Network Denial of Service',
        'Resource Hijacking',
        'Service Stop',
        'System Shutdown / Reboot',
    ],
    next: {
        link: "/complete",
        text: "Complete"
    },  
    children: 
        <div>
            <p>The adversary is trying to manipulate, interrupt, or destroy your systems and data.</p>
            <p>
                Impact consists of techniques that adversaries use to disrupt availability or compromise integrity by manipulating business and operational processes. 
                Techniques used for impact can include destroying or tampering with data. In some cases, business processes can look fine, but may have been altered to benefit the adversaries' goals. 
                These techniques might be used by adversaries to follow through on their end goal or to provide cover for a confidentiality breach.
            </p>
        </div>
};

export default data;
