import photo from "./icons/IMG_2354.webp";
import Image from "next/image";

import { LearnMoreButton } from "./buttons/learnMoreButton";


export function AboutPage() {
  return (
    <>
      <section className="my-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src={photo}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-2xl font-bold sm:text-4xl">
                Меня зовут Оля, и я SMM-специалист{" "}
              </h2>
              <div className="mt-10 flex-col items-center justify-center gap-x-6">
                <div className="mt-4 text-gray-600">
                  <p>
                    За последние два года я прошла путь от начинающего
                    фрилансера до успешного специалиста. Начав с базовых знаний
                    по продвижению в социальных сетях, я смогла расширить свои
                    навыки и предложить клиентам комплексные решения для
                    развития их бизнеса в цифровой среде. <br />
                  </p>
                  <p>
                    Сейчас я помогаю предпринимателям и брендам эффективно
                    управлять своими социальными сетями, разрабатывая стратегии
                    продвижения, которые увеличивают узнаваемость и доход.
                    <br />{" "}
                  </p>{" "}
                  <p className="my-4 text-left relative inline-block">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-indigo-600 relative inline-block">
                      <span className="relative text-white">Моя цель —</span>
                    </span>
                    <span className="absolute inset-0 z-0"></span> не только
                    привлечь подписчиков, но и превратить их в лояльных
                    клиентов, которые будут постоянно возвращаться к вам.
                  </p>
                </div>
                <div className="flex">
                  {" "}
                  <LearnMoreButton href="/offers">
                    Узнать больше о сотрудничестве
                  </LearnMoreButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
