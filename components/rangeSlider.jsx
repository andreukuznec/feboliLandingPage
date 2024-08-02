import { useState } from 'react';

export function RangeSlider() {
  const [value, setValue] = useState(5);

  const handleChange = e => {
    setValue(e.target.value);
  };

  function calculatePrice(value) {
    let price = 500;
    if (value < 3) {
      return <span className="">{value * price} </span>;
    } else if (value > 2 && value < 6) {
      return (
        <>
          <span className="line-through text-gray-500">{value * price} </span>
          {price * value - (5 / 100) * price * value}
        </>
      );
    } else if (value > 5 && value < 11) {
      return (
        <>
          <span className="line-through text-gray-500">{value * price} </span>
          {price * value - (10 / 100) * price * value}
        </>
      );
    } else if (value === 10) {
      return (
        <>
          <span className="line-through text-gray-500">{value * price} </span>
          {price * value - (15 / 100) * price * value}
        </>
      );
    }
  }

  return (
    <>
      <label
        htmlFor="slider"
        className="block text-gray-700 text-lg font-medium m-2"
      >
        Выберите количество рилс
      </label>
      <div className="flex-col flex w-full md:max-w-lg text-center text-gray-900 mt-2">
        <input
          id="slider"
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={handleChange}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-indigo-700/90 "
        />
        <p className="mt-2 font-bold">{value} Reels</p>
        <p className={'text-lg font-bold p-5'}>
          Ваша стоимость: {calculatePrice(value)}Kč
        </p>
      </div>
    </>
  );
}
