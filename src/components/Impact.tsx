import Common from '../common/main';
import steps from '../data/impact';

export default function Main() {
    return (
        <>
            <h2>Impact</h2>
            <section>
                <Common.Overview>
                    <>
                        <p>The adversary is trying to manipulate, interrupt, or destroy your systems and data.</p>
                        <p>
                            Impact consists of techniques that adversaries use to disrupt availability or compromise integrity by manipulating business and operational processes. 
                            Techniques used for impact can include destroying or tampering with data. In some cases, business processes can look fine, but may have been altered to benefit the adversaries' goals. 
                            These techniques might be used by adversaries to follow through on their end goal or to provide cover for a confidentiality breach.
                        </p>
                    </>
                </Common.Overview>
                <Common.Checklist steps={steps} />
                <Common.NextStep link="/completion" text="Complete" />
            </section>
        </>
    );
}
