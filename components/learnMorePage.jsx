import { OpenArrow } from "./icons/openArrow";

export function LearnMorePage() {
  const workAgreement = [
    "Я работаю по предоплате. 50% оплаты производится в начале месяца, 50% в середине (через две недели от предыдущей оплаты). ",
    "Ведение инстаграма ведется мною по заготовленному контент плану. Возможна разработка контент плана на 2 недели/ месяц вперед- как вам удобнее. Я заранее заготавливаю контент, что означает, что публикация контента в срочном режиме (в моменте) и внесение правок после согласования невозможна.",
    "Если правки внесены позже прописанного дедлайна, срок публикации контента может быть изменен.",
    "Я нахожусь на связи с 10:00 до 19:00 по будням. Выходные дни- нерабочие, сторис в эти дни не выставляются, возможен только запланированный постинг постов/ рилс.",
  ];
  return (
    <section className="my-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="lg:py-20">
          <h2 className=" p-5 text-2xl font-bold sm:text-4xl">
            Условия сотрудничества👇🏼{" "}
          </h2>
          <div className="mt-10 p-10 flex-col bg-white/40 rounded-lg items-center justify-center gap-x-6">
            <ul className="mt-4 text-gray-800 text-xl list-decimal">
              {workAgreement.map((el, index) => (
                <li className="mt-4" key={index}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" lg:pb-20 space-y-4">
          <h2 className=" p-5 text-2xl font-bold sm:text-4xl">
            Часто задавыемые вопросы{" "}
          </h2>
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">Как начать сотрудничество? </h2>

              <OpenArrow />
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Для начала сотрудничества, пожалуйста, ознакомьтесь с{" "}
              <a
                className="text-indigo-700 hover:underline hover:text-indigo-800"
                href="offers"
              >
                предложенными условиями и доступными пакетами услуг.
              </a>{" "}
              Если они соответствуют вашим потребностям, свяжитесь со мной через
              Instagram или Telegram. При обращении укажите сферу вашей
              деятельности и приложите ссылку на ваш аккаунт.
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">Где можно посмотреть ваши кейсы?</h2>

              <OpenArrow />
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Кейсы работ можно посмотреть{" "}
              <a
                className=" text-indigo-700 hover:underline hover:text-indigo-800"
                href="https://www.instagram.com/febolii?igsh=MTl1OHBmMWd1Nzl0cg%3D%3D&utm_source=qr"
              >
                на моей странице Instagram
                <span> &rarr;</span> хайлайт “кейс”
              </a>
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
