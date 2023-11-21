/** 
 * Components to Export 
 * Read from routes.tsx
 * 
 * Example: 
 * * import components from './components/main'; *
 * * <components.Component/> *
*/
import { lazy } from 'react';

const components = {
    Collection: lazy(() => import('./Collection')),
    CommandControl: lazy(() => import('./CommandControl')),
    Complete: lazy(() => import('./Complete')),
    CredentialAccess: lazy(() => import('./CredentialAccess')),
    DefenseEvasion: lazy(() => import('./DefenseEvasion')), 
    Discovery: lazy(() => import('./Discovery')),
    Execution: lazy(() => import('./Execution')),
    Exfilration: lazy(() => import('./Exfilration')),
    Impact: lazy(() => import('./Impact')),
    Index: lazy(() => import('./Home')),
    InitialAccess: lazy(() => import('./InitialAccess')),
    LateralMovement: lazy(() => import('./LateralMovement')),
    Persistence: lazy(() => import('./Persistence')),
    PrivilegeEscalation: lazy(() => import('./PrivilegeEscalation')),
    Reconnaissance: lazy(() => import('./Reconnaissance')),
    ResourceDevelopment: lazy(() => import('./ResourceDevelopment')),
};

export default components;
