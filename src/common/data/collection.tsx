import { dataType } from "../type"; 

const data: dataType = {
    title: "Collection",
    steps: [
        'Adversary in the Middle',
        'Archive Collected Data',
        'Audio Capture',
        'Automated Collection',
        'Browser Session Hijacking',
        'Clipboard Data',
        'Data from Cloud Storage',
        'Data from Configuration Repository',
        'Data from Information Repositories',
        'Data from Local System',
        'Data from Network Shared Drive',
        'Data from Removable Media',
        'Data Staged',
        'Email Collection',
        'Input Capture',
        'Screen Capture',
        'Video Capture',
    ],
    next: {
        link: "/commandcontrol",
        text: "Command and Control"
    },
    children: 
        <div>
            <p>The adversary is trying to gather data of interest to their goal.</p>
            <p>
                Collection consists of techniques adversaries may use to gather information and the sources information is collected from that are relevant to following through on the adversary&apos;s objectives. 
                Frequently, the next goal after collecting data is to steal (exfiltrate) the data. 
                Common target sources include various drive types, browsers, audio, video, and email. 
                Common collection methods include capturing screenshots and keyboard input.
            </p>
        </div>
} 

export default data;
