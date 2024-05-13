import clsx from 'clsx';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { ChevronRightIcon } from '@/components/Icons';

interface SectionTitleProps {
  as?: 'h2' | 'h3';
  description: string | ReactNode;
  text: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
}

function SectionText({
  as = 'h2',
  description,
  text,
  button = null,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={clsx('content-wrapper')}>
      <p className={clsx('max-w-lg text-slate-600', 'dark:text-slate-400')}>
        {description}
      </p>
      <p className={clsx('max-w-lg text-slate-600', 'dark:text-slate-400')}>
        {text}
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

export default SectionText;
