import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './BoundingHeadline.module.css';

interface Props {
  className?: string;
}
/* @figmaId 50:81 */
export const BoundingHeadline: FC<Props> = memo(function BoundingHeadline(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.corner}></div>
      <div className={classes.corner2}></div>
      <div className={classes.corner3}></div>
      <div className={classes.corner4}></div>
      <div className={classes.figmaBasics}>Figma basics</div>
    </div>
  );
});
