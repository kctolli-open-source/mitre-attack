import Common from "../common/main";

export default function Main() {
    const [showSteps, setShowSteps] = Common.useState(false);

    const Btn = () => (
        <button 
            onClick={() => setShowSteps(showSteps ? false : true)} 
            id="show-steps"
        >
            here
        </button> 
    );

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
                        MITRE ATT&CK® Framework contains 14 techniques and tactics, and is used to test adversary tactics and techniques against adversary targets. 
                    </p>
                    <p>
                        To view the steps click: <Btn />
                    </p>
                    { showSteps && <Common.StepsList /> }
                </>
            </Common.Overview>
            <article>
                <h3>Additional Info</h3>
                <p>
                    Also see <Common.BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.
                </p>
            </article>
            <Common.NextStep 
                link="/reconnaissance" 
                text="Lets Get Started" 
                next={false} 
            />
        </section>
    );
}
