import { memo } from "react";

/**
 * Render a list of steps.
 * Dependent on React.memo
 *
 * @param {Array} steps - An array of steps to render.
 * @return {JSX.Element} - The rendered list of steps.
 */
const Steps = ({steps}: {steps: any[]}) => (
    <article key="steps">
        <h3>Steps</h3>
        {steps.map((name: string) => (
            <div key={name} id={name}>
                <input type="checkbox" name={name} value={name} />
                <label htmlFor={name}> {name} </label>
            </div>
        ))}
    </article>
);

export default memo(Steps);
