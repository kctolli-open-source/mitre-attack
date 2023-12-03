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

                <article>
                    <h3>Review</h3>
                    <p>Now that you have completed the framework lets review the outcomes.</p>
                    <ul>
                        <li>What vulnerabilities did you discover?</li>
                        <li>Based on what you learned, what improvements to your platform should be made?</li>
                        <li>What technique was the most insightful to you?</li>
                        <li>In future, what would you do differently when following this framework?</li>
                    </ul>
                </article>

                <AdditionalInfo />
            </section>
        </>
    );
}
