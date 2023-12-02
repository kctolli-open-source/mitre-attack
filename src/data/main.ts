import collection from '../data/collection';
import commandcontrol from '../data/commandcontrol';
import credentialaccess from '../data/credentialaccess';
import defenseevasion from '../data/defenseevasion';
import discovery from '../data/discovery';  
import execution from '../data/execution';
import exfilration from '../data/exfilration';
import impact from '../data/impact';
import initialaccess from '../data/initialaccess';
import lateralmovement from '../data/lateralmovement';
import persistence from '../data/persistence';
import privilegeescalation from '../data/privilegeescalation';
import reconnaissance from '../data/reconnaissance';
import resourcedevelopment from '../data/resourcedevelopment';

export default class Data {
    public static readonly collection = collection;
    public static readonly commandcontrol = commandcontrol;
    public static readonly credentialaccess = credentialaccess;
    public static readonly defenseevasion = defenseevasion;
    public static readonly discovery = discovery;
    public static readonly execution = execution;
    public static readonly exfilration = exfilration;
    public static readonly impact = impact;
    public static readonly initialaccess = initialaccess;
    public static readonly lateralmovement = lateralmovement;
    public static readonly persistence = persistence;
    public static readonly privilegeescalation = privilegeescalation;
    public static readonly reconnaissance = reconnaissance;
    public static readonly resourcedevelopment = resourcedevelopment;
}
