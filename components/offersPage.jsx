import { ConsultationIcon } from './icons/offersIcons/consultationIcon';
import { ContentCreationIcon } from './icons/offersIcons/contentCreationIcon';
import { CreateProfileIcon } from './icons/offersIcons/createProfileIcon';
import { MentorIcon } from './icons/offersIcons/mentorIcon';
import { ReelsIcon } from './icons/offersIcons/reelsIcon';
import { SmmIcon } from './icons/offersIcons/smmIcon';

const offers = [
  {
    title: 'SMM-ведение',
    href: '/offers/smm',
    description: 'SMM - комплексное продвижение',
    sticker: <SmmIcon />,
  },
  {
    title: 'Съемка и монтаж рилс',
    href: '/offers/reels',
    description: 'Съёмка и монтаж инстаграм рилс в Праге',
    sticker: <ReelsIcon />,
  },
  {
    title: 'Контент-съемка',
    href: '/offers/content',
    description: 'Съёмка контента для ваших социальных сетей в Праге',
    sticker: <ContentCreationIcon />,
  },
  {
    title: 'Упаковка инстаграм профиля ',
    href: '/offers/profilePacking',
    description: 'Комплексная упаковка инстаграм профиля под ключ',
    sticker: <CreateProfileIcon />,
  },
  {
    title: 'Консультация по инстаграму',
    href: '/offers/consultation',
    description: 'Консультация по инстаграму (онлайн/оффлайн в Праге) ',
    sticker: <ConsultationIcon />,
  },
  {
    title: 'Менторство по инстаграму',
    href: '/offers/mentoring',
    description: 'Менторство по инстаграму (индивидуальное обучение) ',
    sticker: <MentorIcon />,
  },
];

export function OffersPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Варианты сотрудничества со мной
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            /* CARD */
            offers.map(offer => (
              <a
                key={offer.title}
                className="hover:-translate-y-2 rounded-xl border text-gray-800 w-auto h-auto shadow-xl transition hover:border-indigo-600/50 hover:shadow-indigo-600/10 hover:text-gray-950 bg-white/50"
                href={offer.href}
              >
                <div key={offer.title} className=" flex flex-col p-8">
                  {offer.sticker}

                  <h2 className="mt-4 text-xl font-bold ">{offer.title}</h2>

                  <p className="mt-1 text-sm text-gray-600 hover:text-gray-800">
                    {offer.description}
                  </p>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}
