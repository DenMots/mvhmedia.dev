import { ContentType } from '@prisma/client';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';




import type { PropsWithChildren } from 'react';
import { Reactions } from './Reactions.1';

interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    const startMotion = async () => {
      await controls.start({
        y: [-20, 0],
        transition: {
          duration: 0.18,
        },
      });
    };

    if (count !== 0) {
      startMotion();
    }
  }, [count, controls]);

  return count === 0 ? (
    <span className={clsx('flex flex-col font-mono text-sm')}>
      <span
        className={clsx(
          'flex h-5 items-center font-mono text-sm font-bold text-slate-600',
          'dark:text-slate-300'
        )}
      >
        0
      </span>
    </span>
  ) : (
    <m.span
      className={clsx(
        'flex flex-col font-mono text-sm font-bold text-slate-600',
        'dark:text-slate-300'
      )}
      animate={controls}
    >
      <span className={clsx('flex h-5 items-center')}>&nbsp;</span>
      <span className={clsx('flex h-5 items-center')}>{count}</span>
      <span className={clsx('flex h-5 items-center')}>{count - 1}</span>
    </m.span>
  );
}

type ReactionCounterProps = PropsWithChildren<CounterProps>;

export function ReactionCounter({ count, children = null }: ReactionCounterProps) {
  return (
    <div
      className={clsx(
        'relative flex h-6 items-center gap-1 overflow-hidden rounded-full bg-slate-200 py-1 px-2',
        'dark:bg-[#1d263a]'
      )}
    >
      {children}
      <Counter count={count} />
    </div>
  );
}

export type ReactionsProps = {
  contentType: ContentType;
  contentTitle: string;
  withCountView?: boolean;
};

export default Reactions;
