/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Checkbox = React.lazy(() => import('./Checkbox'));

export default function Checklist({steps}: { steps: any[] }) {
    return (
        <>
            {steps.map((step: { name: any; bullets: any; }) => (
                <Checkbox key={step.name} name={step.name} bullets={step.bullets} />
            ))}
        </>
    );
}