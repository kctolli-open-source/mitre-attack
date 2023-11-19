/**
 * Renders the Overview component.
 *
 * @param {JSX.Element} children - The JSX element to be rendered as children.
 * @return {JSX.Element} The rendered Overview component.
 */
export default function Overview({children}: { children: JSX.Element }) {
    return (
        <article>
            <h3>Overview</h3>
            {children}
        </article>
    );
}
