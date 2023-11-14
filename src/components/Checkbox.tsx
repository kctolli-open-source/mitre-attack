/**
 * Renders a Checkbox component.
 *
 * @param {string} name - The name of the checkbox.
 * @param {string[] | undefined} bullets - An array of bullet points for the checkbox.
 * @return {JSX.Element} The rendered Checkbox component.
 */
export default function Checkbox({name, bullets}: { name: string, bullets?: string[] | undefined }): JSX.Element {
    /**
     * Renders a list component.
     *
     * @return {JSX.Element} The rendered list component.
     */
    const List = () => (
        <ul>
            {
                bullets?.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                ))
            }
        </ul>
    );
    
    return (    
        <article key={name} id={name}>
            <input type="checkbox" name={name} value={name} />
            <label htmlFor={name}> {name} </label>
            {(bullets?.length) ? <List />: <></>}
        </article>
    );
}
