import { ReturnButton } from '../buttons/returnButton';
import { cases, terms, title } from '../consts/packingPage';

import { BasicOffer } from './components/basicOffer';

export function ProfilePackingPage() {
  return (
    <div className=" max-w-screen-xl md:p-6 md:ml-0 md:gap-6 ">
      <ReturnButton />
      <BasicOffer title={title} cases={cases} terms={terms} />
    </div>
  );
}
