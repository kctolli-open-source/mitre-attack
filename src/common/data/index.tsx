import { indexType } from '../type';

const props: indexType = {
    steps: [
        {
            name: 'Reconnaissance',
            link: 'reconnaissance',
        },
        {
            name: 'Resource Development',
            link: 'resourcedevelopment',
        },
        {
            name: 'Initial Access',
            link: 'initialaccess',
        },
        {
            name: 'Execution',
            link: 'execution',
        },
        {
            name: 'Persistence',
            link: 'persistence',
        },
        {
            name: 'Privilege Escalation',
            link: 'privilegeescalation',
        },
        {
            name: 'Defense Evasion',
            link: 'defenseevasion',
        },
        {
            name: 'Credential Access',
            link: 'credentialaccess',
        },
        {
            name: 'Discovery',
            link: 'discovery',
        },
        {
            name: 'Lateral Movement',
            link: 'lateralmovement',
        },
        {
            name: 'Collection',
            link: 'collection',
        },
        {
            name: 'Command and Control',
            link: 'commandcontrol',
        },
        {
            name: 'Exfiltration',
            link: 'exfiltration',
        },
        {
            name: 'Impact',
            link: 'impact',
        },
        {
            name: 'Complete and Review',
            link: 'complete',
        },
    ],
    next: {
        link: "/reconnaissance",
        text: "Let's Get Started",
    },
}

export default props;
