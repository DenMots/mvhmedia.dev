import type { PropsWithChildren } from 'react';

import { getPageOgImageUrl } from '@/helpers/page';
import Head from '@/components/meta/Head';
import PageHeader from '@/components/PageHeader';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import WithoutTableOfContents from '@/components/layouts/WithoutTableOfContents';

function PageWithoutMDX({
  frontMatter: { title, description, caption },
  tableOfContents,
  children = null,
}: PropsWithChildren<PageWithoutMDXProps>) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <SkipNavigation />
      <Head title={title} description={description} ogImage={image.default} />
      <PageHeader title={title} description={description} caption={caption} />
      <WithoutTableOfContents tableOfContents={tableOfContents}>
        {children}
      </WithoutTableOfContents>
    </>
    
  );
}

export default PageWithoutMDX;
