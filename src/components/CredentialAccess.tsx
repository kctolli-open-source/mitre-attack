import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/credentialaccess';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Credential Access",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to steal account names and passwords.</p>
                        <p>
                            Credential Access consists of techniques for stealing credentials like account names and passwords. 
                            Techniques used to get credentials include keylogging or credential dumping. 
                            Using legitimate credentials can give adversaries access to systems, make them harder to detect, and provide the opportunity to create more accounts to help achieve their goals.
                        </p>
                    </>,
                next: {
                    link: "/discovery",
                    text: "Discovery"
                }
            }}
        />
    );
}
