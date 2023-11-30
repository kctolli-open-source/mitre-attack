import Common from '../common/main';
import steps from '../data/collection';

export default function Main() {
    return (
        <>
            <h2>Collection</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to gather data of interest to their goal.</p>
                        <p>
                            Collection consists of techniques adversaries may use to gather information and the sources information is collected from that are relevant to following through on the adversary's objectives. 
                            Frequently, the next goal after collecting data is to steal (exfiltrate) the data. 
                            Common target sources include various drive types, browsers, audio, video, and email. 
                            Common collection methods include capturing screenshots and keyboard input.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep props={{link: "/commandcontrol", text: "Command and Control"}} />
            </section>
        </>
    );
}
