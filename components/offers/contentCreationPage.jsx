import { ReturnButton } from '../buttons/returnButton';
import { ComparisonCardComponentNoFeatures } from '../comparisonCardComponetNoFeatures';
import { tariffAdvanced, tariffLight } from '../consts/contentCreation';

export function ContentCreationPage() {
  return (
    <div className=" text-sm  md:bg-white/70 md:rounded-xl md:p-6 md:ml-0 md:gap-6 ">
      <ReturnButton />

      <div className=" items-center justify-center flex flex-col p-5 md:flex-row rounded-lg ">
        <ComparisonCardComponentNoFeatures
          title={'Контент-съемка “Экспресс”'}
          price={800}
          description={
            'оптимальный вариант для тех, у кого нет времени на длительные съемки, но необходимы новые фотографии'
          }
          tariff={tariffLight}
        />
        <ComparisonCardComponentNoFeatures
          title={'Контент-съемка “Классик”'}
          price={2900}
          description={
            'идеальный вариант для тех, кто хочет полностью закрыть вопрос с визуалом на 2 месяца вперед'
          }
          tariff={tariffAdvanced}
        />
      </div>
    </div>
  );
}
