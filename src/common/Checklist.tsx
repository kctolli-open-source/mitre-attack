type ChecklistType = {
    steps: string[]
};

/**
 * Renders a checklist component.
 *
 * @param {Array} steps - An array of steps for the checklist.
 * @return {JSX.Element} - The rendered checklist component.
 */
export default function Checklist({steps}: ChecklistType): JSX.Element {
    const Checkbox = ({name}: { name: string }) => (
        !name ? <></> : 
        <div key={name} id={name}>
            <input type="checkbox" name={name} value={name} />
            <label htmlFor={name}> {name} </label>
        </div>
    );

    return (
        <article key="steps">
            <h3>Steps</h3>
            {steps.map((step: string) => (
                <Checkbox key={step} name={step} />
            ))}
        </article>
    );
}
