/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkbox from "./Checkbox";

/**
 * Renders a checklist component.
 *
 * @param {Array} steps - An array of steps for the checklist.
 * @return {JSX.Element} - The rendered checklist component.
 */
export default function Checklist({steps}: { steps: any[] }) {
    return (
        <article key="steps">
            <h3>Steps</h3>
            {steps.map((step: { name: any; bullets: any; }) => (
                <Checkbox key={step.name} name={step.name} bullets={step.bullets} />
            ))}
        </article>
    );
}