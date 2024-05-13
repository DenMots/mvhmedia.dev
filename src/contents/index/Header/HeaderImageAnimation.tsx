import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i) => {
    const delay = 0.6 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
<m.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100" // Adjust the viewBox to match your mask dimensions
  fill="none"
  initial="hide"
  animate="show"
  strokeWidth={1.5}
  strokeLinecap="round"
  strokeLinejoin="round"
  className={clsx(
    'stroke-accent-500 h-[526px] w-[457px] opacity-60',
    'dark:opacity-40'
  )}
  onAnimationComplete={onAnimationComplete}
>
  <m.path
    variants={animation}
    custom={4}
    d="M10,10 L90,10 L90,90 L10,90 Z" // Adjust the coordinates to fit within your mask
  />
  <m.path
    variants={animation}
    custom={1}
    d="M30,30 L70,30 L70,70 L30,70 Z" // Adjust the coordinates to fit within your mask
  />
</m.svg>

  );
}

export default HeaderImageAnimation;
