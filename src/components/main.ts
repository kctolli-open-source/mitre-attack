import Execution from './Execution';
import Index from './Index';
import InitialAccess from './InitialAccess';
import Persistence from './Persistence';
import Reconnaissance from './Reconnaissance';
import ResourceDevelopment from './ResourceDevelopment';
import DefenseEvasion from './DefenseEvasion';
import PrivilegeEscalation from './PrivilegeEscalation';
import Collection from './Collection';
import CommandControl from './CommandControl';
import CredentialAccess from './CredentialAccess';
import Discovery from './Discovery';
import Exfilration from './Exfilration';
import Impact from './Impact';
import LateralMovement from './LateralMovement';
import Complete from './Complete';

/** 
 * Components to Export 
 * Read from routes.tsx
 * 
 * * Example: 
 * * import components from './components/main'; *
 * * <components.Component/> *
*/
const components = {
    Collection,
    CommandControl,
    Complete,
    CredentialAccess,
    DefenseEvasion, 
    Discovery,
    Execution,
    Exfilration,
    Impact,
    Index,
    InitialAccess,
    LateralMovement,
    Persistence,
    PrivilegeEscalation,
    Reconnaissance,
    ResourceDevelopment,
};

export default components;
