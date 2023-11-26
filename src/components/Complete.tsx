import BlankATag from "../common/BlankATag";

export default function Main() {
    const imageLink = "https://media2.giphy.com/media/mGK1g88HZRa2FlKGbz/200.webp?cid=ecf05e47fdfw7zenpr1k5baa6xhqjcfmtb7gu7g9q1ltcjbj&ep=v1_gifs_search&rid=200.webp&ct=g";

    return (
        <>
            <h2>Complete</h2>
            <section>
                <img 
                    src={imageLink}
                    alt="Complete"
                />

                <p>
                    Congrats you have completed the MITRE ATT&CK framework. <br />
                    For more information on MITRE ATT&CK visit: <BlankATag link="https://attack.mitre.org" text="attack.mitre.org" />.
                </p>

                <a href="/"> Go Home </a>
            </section>
        </>
    );
}
