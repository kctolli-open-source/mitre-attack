import { memo } from "react";

/**
 * Renders an overview section with a title and children elements.
 * Dependent on React.memo
 *
 * @param {JSX.Element} children - The children elements to render within the overview section.
 * @return {JSX.Element} - The rendered overview section.
 */
const Overview = ({children}: {children: JSX.Element}) => (
    <article>
        <h3>Overview</h3>
        {children}
    </article>
);

export default memo(Overview);
