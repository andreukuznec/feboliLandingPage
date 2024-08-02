import { CheckIcon } from "./icons/checkIcon";
import { OrderButton } from "./buttons/orderButton";
import { realisation } from "./consts/comparisonFeatures";
import { backgroundChange } from "./functions/backgroundChange";
import { CrossIcon } from "./icons/crossIcon";
import { LearnMoreButton } from "./buttons/learnMoreButton";
export function ComparisonCardComponent({ title, price, description, tariff }) {
  let bg = false;
  return (
    <div className=" border-2 border-indigo-700/30 md:border-none rounded-lg max-w-80 mb-10 lg:mb-0 items-center m-5">
      <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
        <h3 className="tracking-widest text-4xl mb-3">{title}</h3>

        <span className="text-sm text-gray-600">{description}</span>
      </div>

      {realisation.map((el, ind) => (
        <p
          key={ind + 3}
          className={
            backgroundChange((bg = !bg), "md:bg-gray-100") +
            " mx-3 border-b-2 border-slate-200/50 justify-between text-gray-900 h-12 flex items-center md:border-none md:text-center  md:justify-center"
          }
        >
          <span className="md:hidden">{el}</span>
          <span className="w-5 h-5 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
            {tariff[ind] ? <CheckIcon /> : <CrossIcon />}
          </span>
        </p>
      ))}

      <div className=" p-6 text-center rounded-bl-lg">
        <h2 className="text-4xl text-gray-900 font-medium leading-none mb-6 mt-2">
          {price} <span className="text-xl ">Kč</span>
        </h2>
        <div className="flex flex-col">
          <OrderButton />
          <LearnMoreButton href={"/learnMore"}>Узнать условия</LearnMoreButton>
        </div>
      </div>
    </div>
  );
}
