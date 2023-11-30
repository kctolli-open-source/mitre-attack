import Common from '../common/main';
import steps from '../data/discovery';

export default function Main() {
    return (
        <>
            <h2>Discovery</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to figure out your environment.</p>
                        <p>
                            Discovery consists of techniques an adversary may use to gain knowledge about the system and internal network. 
                            These techniques help adversaries observe the environment and orient themselves before deciding how to act. 
                            They also allow adversaries to explore what they can control and what's around their entry point in order to discover how it could benefit their current objective. 
                            Native operating system tools are often used toward this post-compromise information-gathering objective.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/lateralmovement", text:"Lateral Movement"}} />
            </section>
        </>
    );
}
