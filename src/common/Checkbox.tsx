/**
 * Renders a Checkbox component.
 *
 * @param {string} name - The name of the checkbox.
 * @param {string[] | undefined} bullets - An array of bullet points for the checkbox.
 * @return {JSX.Element} The rendered Checkbox component.
 */
export default function Checkbox({name}: { name: string }): JSX.Element {
    return (
        <div key={name} id={name}>
            <input type="checkbox" name={name} value={name} />
            <label htmlFor={name}> {name} </label>
        </div>
    );
}
