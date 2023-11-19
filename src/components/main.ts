/** 
 * Components to Export 
 * Read from routes.tsx
 * 
 * * Example: 
 * * import components from './components/main'; *
 * * <components.Component/> *
*/
import React from 'react';

const components = {
    Collection: React.lazy(() => import('./Collection')),
    CommandControl: React.lazy(() => import('./CommandControl')),
    Complete: React.lazy(() => import('./Complete')),
    CredentialAccess: React.lazy(() => import('./CredentialAccess')),
    DefenseEvasion: React.lazy(() => import('./DefenseEvasion')), 
    Discovery: React.lazy(() => import('./Discovery')),
    Execution: React.lazy(() => import('./Execution')),
    Exfilration: React.lazy(() => import('./Exfilration')),
    Impact: React.lazy(() => import('./Impact')),
    Index: React.lazy(() => import('./Index')),
    InitialAccess: React.lazy(() => import('./InitialAccess')),
    LateralMovement: React.lazy(() => import('./LateralMovement')),
    Persistence: React.lazy(() => import('./Persistence')),
    PrivilegeEscalation: React.lazy(() => import('./PrivilegeEscalation')),
    Reconnaissance: React.lazy(() => import('./Reconnaissance')),
    ResourceDevelopment: React.lazy(() => import('./ResourceDevelopment')),
};

export default components;
