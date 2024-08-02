import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OrderButton } from '../buttons/orderButton';
import { ReturnButton } from '../buttons/returnButton';
import { RangeSlider } from '../rangeSlider';

export function ReelsPage() {
  const reels = [
    { id: 1, src: '', title: 'Reel 1' },
    { id: 2, src: '', title: 'Reel 2' },
    { id: 3, src: '', title: 'Reel 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
  };
  const terms = [
    'Создание идеи под вашу сферу',
    'Написание по кадрового сценария',
    'Помощь с подбором локации и образа',
    'Все исходники в день съемки',
    'Смонтированные рилсы в течение 2-3 дней',
  ];
  return (
    <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <ReturnButton />
      <div className="container lg:py-20">
        <div className="container flex flex-col items-center p-4">
          <h1 className="p-5  font-bold max-w-fit text-4xl md:text-3xl">
            Съемка и монтаж рилс 🎞
          </h1>
          <h3 className="text-2xl mt-4">В услугу входит:</h3>
          <ul className="list-disc text-xl p-5">
            {terms.map((el, index) => (
              <li className="mt-4" key={index}>
                {el}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl mt-4">Расчитать стоимость:</h3>
          <RangeSlider />
          <OrderButton />
          <h3 className="text-2xl mt-4 p-5">Примеры рилсов:</h3>
          <div className="container lg:py-20">
            <Slider {...settings} className="mt-4">
              {reels.map(reel => (
                <div key={reel.id} className="p-2">
                  <video controls className="mx-auto">
                    <source src={reel.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h4 className="text-center mt-2">{reel.title}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
