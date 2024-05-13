import clsx from 'clsx';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { ChevronRightIcon } from '@/components/Icons';

interface SectionTitleProps {
  as?: 'h2' | 'h3';
  title: string;
  caption: string;
  description: string | ReactNode;
  extraText: string | ReactNode;
  moreText: string  | ReactNode;
  extramoreText: string | ReactNode;
  extraextramoreText: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
}

function SectionTitle({
  as = 'h2',
  title,
  caption,
  description,
  extraText,
  moreText,
  extramoreText,
  extraextramoreText,
  button = null,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={clsx('content-wrapper')}>
      <Heading
        className={clsx(
          'text-accent-600 mb-2 block font-black',
          'lg:mb-4',
          'dark:text-accent-400'
        )}
      >
        {caption}
      </Heading>
      <p
        className={clsx(
          'mb-4 text-3xl font-black text-slate-700',
          'lg:text-4xl',
          'dark:text-slate-200'
        )}
      >
        {title}
      </p>
      <p className={clsx('max-w-lg text-slate-600', 'dark:text-slate-400')}>
        {description}
      </p>
        <p className={clsx('mt-2 max-w-lg text-slate-600', 'dark:text-slate-400')}>
          {extraText}
        </p>
        <p className={clsx('mt-2 max-w-lg text-slate-600', 'dark:text-slate-400')}>
          {moreText}
        </p>
        <p className={clsx('mt-2 max-w-lg text-slate-600', 'dark:text-slate-400')}>
          {extramoreText}
        </p>
        <p className={clsx('mt-2 max-w-lg text-slate-600', 'dark:text-slate-400')}>
          {extraextramoreText}
        </p>
      
      {button && (
        <div className={clsx('mt-4', 'md:mt-6')}>
          <Link href={button.href} className={clsx('button button--soft')}>
            {button.title}
            <ChevronRightIcon className="mt-0.5 h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
