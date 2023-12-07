import dynamic from "next/dynamic";
import { memo } from "react";

import AdditionalInfo from "./AdditionalInfo";

/**
 * Renders the Complete component.
 * 
 * @return {JSX.Element} The rendered Complete component.
 */
const Complete = (): JSX.Element => {
    const BlankATag = dynamic(() => import('./BlankATag'));
    const Review = dynamic(() => import('./Review'));

    return (
        <>
            <h2>Complete</h2>
            <section>
                <p>
                    Congrats you have completed the MITRE ATT&CK framework. <br />
                    For more information on MITRE ATT&CK visit: <BlankATag link="https://attack.mitre.org" text="attack.mitre.org" />.
                </p>

                <Review />
                <AdditionalInfo />
            </section>
        </>
    );
}

export default memo(Complete);
