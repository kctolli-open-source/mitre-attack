import AdditionalInfo from "./AdditionalInfo";
import BlankATag from "./BlankATag";

/**
 * Renders the Complete component.
 * 
 * @return {JSX.Element} The rendered Complete component.
 */
export default function Complete({imageLink}: {imageLink: string}): JSX.Element {
    return (
        <>
            <h2>Complete</h2>
            <section>
                <img src={imageLink} alt="Complete" />

                <p>
                    Congrats you have completed the MITRE ATT&CK framework. <br />
                    For more information on MITRE ATT&CK visit: <BlankATag link="https://attack.mitre.org" text="attack.mitre.org" />.
                </p>

                <AdditionalInfo />
            </section>
        </>
    );
}
