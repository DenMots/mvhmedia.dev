import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function Wijntje() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Of een wijntje?"
        caption="Koffietje doen?"
        description="Of het nu een kop koffie of een glas wijn wordt, Ik ben ervan overtuigd dat ik een waardevolle toevoeging kan zijn aan jullie team, ik zou mijn projecten, vaardighden en enthousiasme graag nader toelichten in een persoonlijk gesprek." 
        extraText=""
        moreText=""
        extramoreText=""
        extraextramoreText=""
      />
    </header>
  );
}

export default Wijntje;
