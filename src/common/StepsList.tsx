import steps from "../data/index";

/**
 * Renders a list of steps.
 *
 * @returns {JSX.Element} - The rendered list of steps.
 */
export default function StepsList () {
    return (
        <div>
            <h4>Steps</h4>
            <ol>
                {steps.map(step => (
                    <li key={step?.name}><a href={step?.link}>{step?.name}</a></li>
                ))}
            </ol>
        </div>
    );
}