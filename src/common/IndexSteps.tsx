"use client";

import { useState, memo } from "react";

/**
 * Renders a component that displays a list of steps.
 * Dependent on React.useState and React.memo
 *
 * @param {object[]} steps - An array of steps to be displayed.
 * @return {React.ReactNode} The rendered component.
 */
const IndexSteps = ({steps}: {steps: any[]}) => {
    const [showSteps, setShowSteps] = useState(false);

    return (
        <>
            <p>
                MITRE ATT&CK® Framework contains 14 techniques and tactics. To view the techniques click: <button onClick={() => setShowSteps(showSteps ? false : true)}>here</button>
            </p>
            { 
                showSteps && 
                <div> 
                    <h4>Techniques</h4>
                    <ol> {steps.map(step => (<li key={step?.name}><a href={step?.link}>{step?.name}</a></li>))} </ol>
                </div>
            }
        </>
    );
}

export default memo(IndexSteps);
