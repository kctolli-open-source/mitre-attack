import Common from "../common/main";

export default function Main() {
    return (
        <>
            <h2>Complete</h2>
            <section>
                <img src={Common.imageLink} alt="Complete" />

                <p>
                    Congrats you have completed the MITRE ATT&CK framework. <br />
                    For more information on MITRE ATT&CK visit: <Common.BlankATag link="https://attack.mitre.org" text="attack.mitre.org" />.
                </p>

                <a href="/"> Go Home </a>
            </section>
        </>
    );
}
