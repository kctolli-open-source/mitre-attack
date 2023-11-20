/**
 * Renders a Checkbox component.
 *
 * @param {string} name - The name of the checkbox.
 * @return {JSX.Element} The rendered Checkbox component.
 */
export default function Checkbox({name}: { name: string }): JSX.Element {
    /**
     * Renders a box component.
     *
     * @return {JSX.Element} The rendered box component.
     */
    const Box = () => (
        <div key={name} id={name}>
            <input type="checkbox" name={name} value={name} />
            <label htmlFor={name}> {name} </label>
        </div>
    );

    return name ? <Box /> : <></>;
}
