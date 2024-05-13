import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function Wijn() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Lorem Ipsum"
        caption="Lorem ipsum"
        description="Ik houd van een goed glas wijn, maar zeg ook geen nee tegen een biertje, en ik ben altijd klaar voor een dynamisch en inspirerend gesprek. Jullie belofte van no bullshit en goudeerlijk advies spreekt mij aan, ik draai er zelf ook niet omheen. Ik waardeer een omgeving waar open en eerlijke communicatie voorop staat en waar soms een 'nee' het juiste antwoord is."
      />
    </header>
  );
}

export default Wijn;
