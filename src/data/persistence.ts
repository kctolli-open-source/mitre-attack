import { stepsType } from '../types';

const steps: stepsType[] = [
    {
        name: 'Account Manipulation',
        bullets: ['Additional Cloud Credentials', 'Additional Email Delegate Permissions', 'Additional Cloud Roles', 'SSH Authorized Keys', 'Device Registration', 'Additional Container Cluster Roles'],
    },
    {
        name: 'Bits Jobs'
    },
    {
        name: 'Boot / Logon Autostart Execution',
        bullets: ['Registry Run Keys / Startup Folder', 'Authentication Package', 'Time Providers', 'Winlogon Helper DLL', 'Security Support Provider', 'Kernel Modules and Extensions', 'Re-opened Applications', 'LSASS Driver', 'Shortcut Modification', 'Port Monitors', 'Print Processors', 'XDG Autostart Entries', 'Active Setup', 'Login Items'],
    },
    {
        name: 'Boot / Logon Initialization Scripts',
        bullets: ['Logon Script (Windows)', 'Login Hook', 'Network Logon Script', 'RC Scripts', 'Startup Items'],
    },
    {
        name: 'Browser Extensions', 
    },
    {
        name: 'Compromise Client Software Binary'
    },
    {
        name: 'Create Account',
        bullets: ['Local Account', 'Domain Account', 'Cloud Account'],
    },
    {
        name: 'Create and Modify System Process',
        bullets: ['Launch Agent', 'Systemd Service', 'Windows Service', 'Launch Daemon'],
    },
    {
        name: 'Event Triggered Execution',
        bullets: ['Change Default File Association', 'Screensaver', 'Windows Management Instrumentation Event Subscription', 'Unix Shell Configuration Modification', 'Trap', 'LC_LOAD_DYLIB Addition', 'Netsh Helper DLL', 'Accessibility Features', 'AppCert DLLs', 'AppInit DLLs', 'Application Shimming', 'Image File Execution Options Injection', 'PowerShell Profile', 'Emond', 'Component Object Model Hijacking', 'Installer Packages', ],
    },
    {
        name: 'External Remote Services',
    },
    {
        name: 'Hijack Execution Flow',
        bullets: ['DLL Search Order Hijacking', 'DLL Side-Loading', 'Dylib Hijacking', 'Executable Installer File Permissions Weakness', 'Dynamic Linker Hijacking', 'Path Interception by PATH Environment Variable', 'Path Interception by Search Order Hijacking', 'Path Interception by Unquoted Path', 'Services File Permissions Weakness', 'Services Registry Permissions Weakness', 'COR_PROFILER', 'KernelCallbackTable'],
    },
    {
        name: 'Implant Internal Image',
    },
    {
        name: 'Modify Authentication Process',
        bullets: ['Domain Controller Authentication', 'Password Filter DLL', 'Pluggable Authentication Modules', 'Network Device Authentication', 'Reversible Encryption', 'Multi-Factor Authentication', 'Hybrid Identity', 'Network Provider DLL'],
    },
    {
        name: 'Office Application Startup',
        bullets: ['Office Template Macros', 'Office Test', 'Outlook Forms', 'Outlook Home Page', 'Outlook Rules', 'Add-ins']
    },
    {
        name: 'Power Settings',
    },
    {
        name: 'Pre-OS Boot',
        bullets: ['System Firmware', 'Component Firmware', 'Bootkit', 'ROMMONkit', 'TFTP Boot'],
    },
    {
        name: 'Scheduled Task / Job',
        bullets: ['At', 'Cron', 'Scheduled Task', 'Systemd Timers', 'Container Orchestration Job'],
    },
    {
        name: 'Server Software Component',
        bullets: ['SQL Stored Procedures', 'Transport Agent', 'Web Shell', 'IIS Components', 'Terminal Services DLL'],
    },
    {
        name: 'Traffic Signaling',
        bullets: ['Port Knocking', 'Socket Filters'],
    },
    {
        name: 'Valid Accounts',
        bullets: ['Default Accounts', 'Domain Accounts', 'Local Accounts', 'Cloud Accounts'],
    }
];

export default steps;
