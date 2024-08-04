import { ReturnButton } from '../buttons/returnButton';
import { reels, terms, title } from '../consts/reelsPage';
import { BasicOffer } from './components/basicOffer';

export function ReelsPage() {
  return (
    <div className=" max-w-screen-xl md:p-6 md:ml-0 md:gap-6 ">
      <ReturnButton />
      <BasicOffer title={title} terms={terms} cases={reels} slider={true} />
    </div>
  );
}
