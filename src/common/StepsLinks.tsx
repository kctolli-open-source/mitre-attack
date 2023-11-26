import steps from "../data/index";

/**
 * Render the StepsLinks component.
 *
 * @return {JSX.Element} The rendered StepsLinks component.
 */
export default function StepsLinks(): JSX.Element {
    return (
        <article>
            <h3>Steps</h3>
            <ol>
                {steps.map(step => (
                    <li key={step?.name}><a href={step?.link}>{step?.name}</a></li>
                ))}
            </ol>
        </article>
    );
}
