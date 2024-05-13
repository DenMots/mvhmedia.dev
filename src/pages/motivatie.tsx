import clsx from 'clsx';

import Aangenaam from '@/contents/index/Aangenaam';
import PageWithoutMDX from '@/contents-layouts/PageWithoutMDX';
import Wijntje from '@/contents/index/Wijntje';

function Motivatie() {
  return (
    <PageWithoutMDX
      frontMatter={{
        title: 'Marit wil solliciteren! (en een koffietje of wijntje doen!)',
        description: 'Bij het bekijken van jullie vacature kreeg ik sterk de indruk dat jullie op zoek zijn naar een echte man voor de job. Goed nieuws: ik ben misschien niet de man die jullie verwachtten, maar zeker de vrouw die jullie nodig hebben! Als iemand die zowel op technisch als creatief vlak haar mannetje staat, breng ik een frisse blik die jullie team zal verrijken.',
        caption: 'Hey Vizien!',
      }}
    >  

<>

      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Aangenaam />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <Wijntje />
      </section>

    </>

    

</PageWithoutMDX>)};
;
export default Motivatie;

