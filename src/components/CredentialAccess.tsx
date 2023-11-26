import steps from '../data/credentialaccess';

import Checklist from '../common/Checklist';
import Overview from '../common/Overview';
import NextStep from '../common/NextStep';

export default function Main() {
    return (
        <>
            <h2>Credential Access</h2>
            <section>
                <Overview>
                    <>
                        <p>The adversary is trying to steal account names and passwords.</p>
                        <p>
                            Credential Access consists of techniques for stealing credentials like account names and passwords. 
                            Techniques used to get credentials include keylogging or credential dumping. 
                            Using legitimate credentials can give adversaries access to systems, make them harder to detect, and provide the opportunity to create more accounts to help achieve their goals.
                        </p>
                    </>
                </Overview>
                <Checklist steps={steps} />
                <NextStep link="/discovery" text="Discovery" />
            </section>
        </>
    );
}
