import clsx from 'clsx';

import { EyeIcon,HashtagIcon, HeartIcon } from '@/components/Icons';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <HashtagIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Oplossingsgericht"
          desc="Ik focus niet op problemen, maar op creatieve oplossingen. Mijn vastberadenheid en enthousiasme voor mijn werk stellen me in staat om consequent innovatieve manieren te vinden om uitdagingen aan te pakken. Dit zorgt ervoor dat ik aan elk project blijvende waarde toevoeg."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Detailgericht"
          desc="Mijn diepe interesse in design en mijn streven naar ontwikkeling drijven mijn zoektocht naar vernieuwende oplossingen. Elk obstakel zie ik als een kans om te leren en te evolueren, wat mij een onmisbaar lid maakt van elk creatief team."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <EyeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Groeistrateeg"
          desc="Met een sterke groeimindset implementeer ik data-gedreven strategieën en innovatieve marketingtechnieken. Dit stelt mij in staat om tastbare verbeteringen te bewerkstelligen en de groei van het bedrijf te versnellen."
        />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>

    </>
  );
}

export default IndexContents;
