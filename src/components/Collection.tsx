import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/collection';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Collection",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to gather data of interest to their goal.</p>
                        <p>
                            Collection consists of techniques adversaries may use to gather information and the sources information is collected from that are relevant to following through on the adversary's objectives. 
                            Frequently, the next goal after collecting data is to steal (exfiltrate) the data. 
                            Common target sources include various drive types, browsers, audio, video, and email. 
                            Common collection methods include capturing screenshots and keyboard input.
                        </p>
                    </>,
                next: {
                    link: "/commandcontrol",
                    text: "Command and Control"
                }
            }}
        />
    );
}
