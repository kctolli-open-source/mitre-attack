import Common from '../common/main';
import steps from '../data/credentialaccess';

export default function Main() {
    return (
        <>
            <h2>Credential Access</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to steal account names and passwords.</p>
                        <p>
                            Credential Access consists of techniques for stealing credentials like account names and passwords. 
                            Techniques used to get credentials include keylogging or credential dumping. 
                            Using legitimate credentials can give adversaries access to systems, make them harder to detect, and provide the opportunity to create more accounts to help achieve their goals.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep link="/discovery" text="Discovery" />
            </section>
        </>
    );
}
