import collection from './collection';
import commandcontrol from './commandcontrol';
import credentialaccess from './credentialaccess';
import defenseevasion from './defenseevasion';
import discovery from './discovery';  
import execution from './execution';
import exfilration from './exfilration';
import impact from './impact';
import initialaccess from './initialaccess';
import lateralmovement from './lateralmovement';
import persistence from './persistence';
import privilegeescalation from './privilegeescalation';
import reconnaissance from './reconnaissance';
import resourcedevelopment from './resourcedevelopment';

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
