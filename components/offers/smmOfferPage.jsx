import { ComparisonCardComponent } from "../comparisonCardComponent";
import { ComparisonFeatures } from "../comparisonFeatures";
import { CheckIcon } from "../icons/checkIcon";
import { CrossIcon } from "../icons/crossIcon";
import { tariffLight, tariffAdvanced } from "../consts/comparisonFeatures";

export function SmmOfferPage() {
  return (
    <div className=" justify-center flex flex-col text-sm  md:bg-white/70 md:rounded-xl md:p-6 md:ml-0 md:gap-6 ">
      {/* {tariff.map((obj, ind) => (
        <div className="flex flex-col md:sr-only max-w-sm bg-white/70 border-2 rounded-xl border-indigo-600/50 hover:shadow-xl hover:shadow-indigo-600/20 border-black items-center p-6 m-6 hover:-translate-y-3">
          <div className="flex flex-col items-center">
            <p key={ind} className="text-slate-900 text-2xl font-semibold">
              {obj.title} тариф
            </p>
            <p className="text-slate-600">{obj.description}</p>
          </div>
          <div className="flex flex-col items-start mt-2 ">
            <p className="text-slate-900 text-lg font-semibold">Этапы работы</p>

            <div className="flex flex-col size-full">
              <p className="text-slate-900 text-base font-semibold mt-2">
                {obj.stage.title}{" "}
              </p>
              <ul className="text-slate-800 ">
                {obj.stage.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex m-1 align-top text-md items-start"
                  >
                    <div className="mr-2 align-top">
                      <CheckIcon />
                    </div>
                    <li> {point} </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex flex-col ">
              <p className="text-slate-900 text-base font-semibold mt-2">
                Реализация стратегии
              </p>
              <ul className="text-slate-800 ">
                {obj.stage.realisation.map((el, i, arr) => (
                  <>
                    <div key={i} className="flex m-2  text-md">
                      <div key={i + 1} className="mr-2">
                        {obj.title === "Базовый" &&
                        (i === realisation.length - 1 ||
                          i === realisation.length - 2) ? (
                          <CrossIcon />
                        ) : (
                          <CheckIcon />
                        )}
                      </div>

                      <li className=" "> {el} </li>
                    </div>
                    <div className="h-px w-full bg-slate-300/50 "></div>
                  </>
                ))}
              </ul>
            </div>
          </div> 
        </div>*/}
      {/* 
      *
      DESKTOP VERSION 
      *
      */}
      <div className=" flex flex-col md:justify-center md:flex md:flex-row md:max-w-fit ">
        <div className=" mt-48 hidden md:block">
          <ComparisonFeatures />
        </div>
        <div className=" flex flex-col border-2 items-center  md:flex md:flex-row rounded-lg  lg:border-2">
          <ComparisonCardComponent
            title={"Базовый"}
            price={15000}
            description={
              "подойдет тем, у кого уже упакована страница и необходимо поддержание страницы в активности"
            }
            tariff={tariffLight}
          />
          <ComparisonCardComponent
            title={"Расширенный"}
            price={22000}
            description={
              "подойдет тем, кому необходимо не только ведение аккаунта, но и исправление ошибок в упаковке, а также продвижение профиля"
            }
            tariff={tariffAdvanced}
          />
        </div>
      </div>
    </div>
  );
}
