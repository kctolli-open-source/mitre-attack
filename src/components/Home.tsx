import Common from "../common/main";
import steps from "../data/index";

export default function Main() {
    /**
     * Renders a list of steps.
     *
     * @return {JSX.Element} - The rendered steps list component.
     */
    const StepsList = () => (
        <article>
            <h4>Steps</h4>
            <ol>
                {steps.map(step => (
                    <li key={step?.name}><a href={step?.link}>{step?.name}</a></li>
                ))}
            </ol>
        </article>
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
                        Also see <Common.BlankATag link="https://owasp.org/projects/" text="OWASP Projects" /> for examples to test against.
                    </p>
                    <StepsList />
                </>
            </Common.Overview>
            <Common.NextStep 
                link="/reconnaissance" 
                text="Lets Get Started" 
                next={false} 
            />
        </section>
    );
}
