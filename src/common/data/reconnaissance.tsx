import { dataType } from "../type"; 

const data: dataType = {
    title: "Reconnaissance",
    steps: [
        'Active Scanning',
        "Gather Victim Host Information",
        "Gather Victim Identity Information",
        "Gather Victim Network Information",
        "Gather Victim Organizational Information",
        "Phishing for Information",
        "Search Closed Sources",
        "Search Open Technical Databases",
        "Search Open Websites/Domains",
        "Search Victim-Owned Websites",
    ],
    next: {
        link: "/resourcedevelopment",
        text: "Resource Development"
    },
    children: 
        <div>
            <p>The adversary is trying to gather information they can use to plan future operations.</p>
            <p>
                Reconnaissance consists of techniques that involve adversaries actively or passively gathering information that can be used to support targeting. 
                Such information may include details of the victim organization, infrastructure, or staff/personnel. 
                This information can be leveraged by the adversary to aid in other phases of the adversary lifecycle, such as using gathered information to plan and execute Initial Access, to scope and prioritize post-compromise objectives, or to drive and lead further Reconnaissance efforts.
            </p>
        </div>
} 

export default data;
