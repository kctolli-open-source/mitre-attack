import ComponentBuilder from '../common/ComponentBuilder';
import steps from '../data/initialaccess';

export default function Main() {
    return (
        <ComponentBuilder 
            props={{
                title: "Initial Access",
                steps: steps,
                children: 
                    <>
                        <p>The adversary is trying to get into your network.</p>
                        <p>
                            Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. 
                            Techniques used to gain a foothold include targeted spearphishing and exploiting weaknesses on public-facing web servers. 
                            Footholds gained through initial access may allow for continued access, like valid accounts and use of external remote services, or may be limited-use due to changing passwords.
                        </p>
                    </>,
                next: {
                    link: "/execution",
                    text: "Execution"
                }
            }}
        />
    );
}