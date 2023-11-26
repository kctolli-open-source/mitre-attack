type OverviewType = {
    children: JSX.Element
};

/**
 * Renders the Overview component.
 *
 * @param {JSX.Element} children - The JSX element to be rendered as children.
 * @return {JSX.Element} The rendered Overview component.
 */
export default function Overview({children}: OverviewType): JSX.Element {
    return (
        <article>
            <h3>Overview</h3>
            {children}
        </article>
    );
}
