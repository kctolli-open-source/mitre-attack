import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/exfilration';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Exfiltration",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to steal data.</p>
                        <p>
                            Exfiltration consists of techniques that adversaries may use to steal data from your network. 
                            Once they've collected data, adversaries often package it to avoid detection while removing it. 
                            This can include compression and encryption. 
                            Techniques for getting data out of a target network typically include transferring it over their command and control channel or an alternate channel and may also include putting size limits on the transmission.
                        </p>
                    </>,
                next: {
                    link: "/impact",
                    text: "Impact"
                }
            }}
        />
    );
}
