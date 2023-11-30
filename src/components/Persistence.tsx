import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/persistence';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Persistence",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to maintain their foothold.</p>
                        <p>
                            Persistence consists of techniques that adversaries use to keep access to systems across restarts, changed credentials, and other interruptions that could cut off their access. 
                            Techniques used for persistence include any access, action, or configuration changes that let them maintain their foothold on systems, such as replacing or hijacking legitimate code or adding startup code.
                        </p>
                    </>,
                next: {
                    link: "/privilegeescalation",
                    text: "Privilege Escalation"
                }
            }}
        />
    );
}