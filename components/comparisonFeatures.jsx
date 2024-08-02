import { QuestionMarkIcon } from "./icons/questionMarkIcon";
import { marketingAnalysis, realisation } from "./consts/comparisonFeatures";
import { backgroundChange } from "./functions/backgroundChange";
import { useState } from "react";


export function ComparisonFeatures() {
  const [isHovered, setIsHovered] = useState(null);
  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };
  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  let bg = true;
  return (
    <div className="mt-px border-t overflow-visible border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg">
      {realisation.map((el, index) => (
        <div
          key={index + 2}
          className={
            backgroundChange((bg = !bg), "bg-gray-100") +
            " text-gray-900 h-12 text-center px-4 flex items-center justify-start"
          }
        >
          {el.includes("?") ? (
            <div className="relative inline-block">
              {el.replace("?", "")}
              <span
                key={index}
                className="inline-block"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <QuestionMarkIcon />
              </span>
              {isHovered === index && (
                <ul className="md:rounded-lg md:p-4 md:text-left md:bg-indigo-600 md:text-white md:absolute md:top-full left-1/2 md:min-w-max md:h-auto z-10">
                  {marketingAnalysis[index].map((el, idx) => (
                    <li key={idx}>{el}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            el
          )}
        </div>
      ))}
    </div>
  );
}
