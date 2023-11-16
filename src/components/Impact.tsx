import React from 'react';
import steps from '../data/resourcedevelopment';

const Checklist = React.lazy(() => import('../common/Checklist'));
const OverviewSection = React.lazy(() => import('../common/OverviewSection'));
const StepsSection = React.lazy(() => import('../common/StepsSection'));
const NextStep = React.lazy(() => import('../common/NextStep'));

export default function Main() {
    return (
        <>
            <h1>Impact</h1>
            <main>
                <OverviewSection>
                    <>
                        <p>The adversary is trying to manipulate, interrupt, or destroy your systems and data.</p>
                        <p>
                        Impact consists of techniques that adversaries use to disrupt availability or compromise integrity by manipulating business and operational processes. Techniques used for impact can include destroying or tampering with data. In some cases, business processes can look fine, but may have been altered to benefit the adversaries’ goals. These techniques might be used by adversaries to follow through on their end goal or to provide cover for a confidentiality breach.
                        </p>
                    </>
                </OverviewSection>
                <StepsSection>
                    <Checklist steps={steps} />
                </StepsSection>
                <NextStep link="/completion" text="Complete" />
            </main>
        </>
    );
}
