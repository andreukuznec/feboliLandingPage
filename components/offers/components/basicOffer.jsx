import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OrderButton } from '../../buttons/orderButton';
import { RangeSlider } from '../../rangeSlider';

export function BasicOffer({ title, terms, cases, slider = false }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
  };
  return (
    <div className="container lg:py-20">
      <div className="container flex flex-col items-center p-4">
        <h1 className="p-5  font-bold max-w-fit text-4xl md:text-3xl">
          {title}
        </h1>
        <h3 className="text-2xl mt-4">В услугу входит:</h3>
        <ul className="list-disc text-xl p-5">
          {terms.map((el, index) => (
            <li className="mt-4" key={index}>
              {el}
            </li>
          ))}
        </ul>
        {slider ? (
          <>
            <h3 className="text-2xl mt-4">Расчитать стоимость:</h3>
            <RangeSlider /> <OrderButton />
          </>
        ) : (
          <OrderButton />
        )}

        <h3 className="text-2xl mt-4 p-5">Примеры рилсов:</h3>
        <div className="container md:py-10">
          <Slider {...settings} className="mt-4">
            {cases.map(el => (
              <div key={el.id} className="p-2">
                <video controls className="mx-auto">
                  <source src={el.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h4 className="text-center mt-2">{el.title}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
