import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="De vrouw voor de job"
        caption="Frisse blik"
        description="Bij het bekijken van jullie vacature kreeg ik sterk de indruk dat jullie op zoek zijn naar een echte ‘man voor de job’. Goed nieuws: ik ben misschien niet de man die jullie verwachtten, maar zeker de vrouw die jullie nodig hebben! Als iemand die zowel op technisch als creatief vlak haar mannetje staat, breng ik een frisse blik die jullie team zal verrijken."
      />
    </header>
  );
}

export default DetailOriented;
