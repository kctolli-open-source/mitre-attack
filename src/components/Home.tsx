import Common from "../common/main";
import steps from "../data/index";

export default function Main() {
    const [showSteps, setShowSteps] = Common.useState(false);

    return (
        <section>
            <h2>Introduction</h2>
            <p>This site is a walk through that gives a step by step checklist of the <Common.BlankATag link="https://attack.mitre.org/" text="MITRE ATT&CK" /> framework.</p>
            <Common.Overview>
                <>
                    <p>
                        MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. 
                        The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
                    </p>
                    <p>
                        MITRE ATT&CK® Framework contains 14 techniques and tactics. To view the steps click: <button onClick={() => setShowSteps(showSteps ? false : true)}>here</button>
                    </p>
                    { 
                        showSteps && 
                        <div> 
                            <h4>Steps</h4>
                            <ol>
                                {steps.map(step => (
                                    <li key={step?.name}><a href={step?.link}>{step?.name}</a></li>
                                ))}
                            </ol>
                        </div>
                    }
                </>
            </Common.Overview>
            <article>
                <h3>Additional Info</h3>
                <p>
                    Also see <Common.BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.
                </p>
            </article>
            <Common.NextStep props={{link: "/reconnaissance", text: "Reconnaissance"}} next={false} />
        </section>
    );
}
