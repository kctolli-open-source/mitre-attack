import { GrLinkNext } from 'react-icons/gr';
import { memo } from 'react';

import { nextStepType } from './type';

/**
 * Renders a link for the next step.
 * Dependent on React.memo
 *
 * @param {nextStepType} next - The next step object containing the link and text.
 * @return {JSX.Element} The rendered link element.
 */
const NextStep = ({next}: nextStepType) => (
    <a 
        href={next.link} 
        key={next.text} 
        className="next-step"
    >
        {next.text} <GrLinkNext />
    </a>
);

export default memo(NextStep);
