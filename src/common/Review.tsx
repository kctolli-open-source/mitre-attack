import { memo } from "react";

/**
 * Render function for the Review component.
 * Dependent on React.memo
 *
 * @return {JSX.Element} The rendered Review component.
 */
const Review = () => (
    <article>
        <h3>Review</h3>
        <p>Now that you have completed the framework lets review the outcomes.</p>
        <ul>
            <li>What vulnerabilities did you discover?</li>
            <li>Based on what you learned, what improvements to your platform should be made?</li>
            <li>What technique was the most insightful to you?</li>
            <li>In future, what would you do differently when following this framework?</li>
        </ul>
    </article>
);

export default memo(Review);
