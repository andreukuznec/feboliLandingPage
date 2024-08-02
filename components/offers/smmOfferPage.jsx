import { ReturnButton } from '../buttons/returnButton';
import { ComparisonCardComponent } from '../comparisonCardComponent';
import { ComparisonFeatures } from '../comparisonFeatures';

import { tariffAdvanced, tariffLight } from '../consts/comparisonFeatures';

export function SmmOfferPage() {
  return (
    <div className="  flex flex-col text-sm  md:bg-white/70 md:rounded-xl md:p-6 md:ml-0 md:gap-6 ">
      <ReturnButton />
      <div className=" flex flex-col md:justify-center md:flex md:flex-row md:max-w-fit ">
        <div className=" mt-48 hidden md:block">
          <ComparisonFeatures />
        </div>
        <div className=" flex flex-col border-2 items-center  md:flex md:flex-row rounded-lg  lg:border-2">
          <ComparisonCardComponent
            title={'Базовый'}
            price={15000}
            description={
              'подойдет тем, у кого уже упакована страница и необходимо поддержание страницы в активности'
            }
            tariff={tariffLight}
          />
          <ComparisonCardComponent
            title={'Расширенный'}
            price={22000}
            description={
              'подойдет тем, кому необходимо не только ведение аккаунта, но и исправление ошибок в упаковке, а также продвижение профиля'
            }
            tariff={tariffAdvanced}
          />
        </div>
      </div>
    </div>
  );
}
