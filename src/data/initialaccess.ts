import { stepsType } from './types';

const steps: stepsType[] = [
    {
        name: 'Content Injection',
    },
    {
        name: 'Drive-by Compromise',
    },
    {
        name: 'Exploit Public-Facing Application',
    },
    {
        name: 'External Remote Services',
    },
    {
        name: 'Hardware Additions',
    },
    {
        name: 'Phishing',
        bullets: ['Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service', 'Spearphishing Voice'],
    },
    {
        name: 'Replication Through Removable Media',
    },
    {
        name: 'Supply Chain Compromise',
        bullets: ['Compromise Software Dependencies and Development Tools', 'Compromise Software Supply Chain', 'Compromise Hardware Supply Chain']
    },
    {
        name: 'Trusted Relationship',
    },
    {
        name: 'Valid Accounts',
        bullets: ['Default Accounts', 'Domain Accounts', 'Local Accounts', 'Cloud Accounts']
    }
];

export default steps;
