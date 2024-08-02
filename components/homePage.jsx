import React from "react";
import Layout from "./layout/layout";
import { GradientLine } from "./icons/gradientLine";
import { OrderButton } from "./buttons/orderButton";
import { LearnMoreButton } from "./buttons/learnMoreButton";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:text-gray-700 hover:-translate-y-0.5">
            Комплексные решения для развития вашего бизнеса в цифровой среде{" "}
            <LearnMoreButton href={"offers"} />
          </div>
        </div>

        <div className="text-center items-center align-middle mx-auto">
          {" "}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ольга Соколова{" "}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Помогаю предпринимателям и брендам эффективно управлять своими
            социальными сетями
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <OrderButton />
            <LearnMoreButton />
          </div>
        </div>
      </div>
    </>
  );
}
