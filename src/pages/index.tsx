import AllPromotionsButton from "@components/AllDiscountButton";
import Carousel from "@components/Carousel";
import Sidebar from "@components/Sidebar";
import { homePageSliderData } from "@assets/data/homePageSliderData";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex px-20 pt-6 pb-12">
      <Sidebar />

      <div className="w-full pl-10 overflow-x-hidden">
        <div className="w-[1200px]">
          <Carousel data={homePageSliderData} />
          <AllPromotionsButton />
        </div>

        <section>
          <h2 className="mb-4 text-xl">Последние просмотренные товары</h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">
            Бестселлеры в категории Фитнес-браслеты
          </h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">Акционные предложения</h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">Горячие новинки</h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">
            Чаще всего добавляют в список желаний
          </h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">Самые ожидаемые</h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">Самые обсуждаемые товары</h2>
        </section>

        <section>
          <h2 className="mb-4 text-xl">Сейчас пользуются спросом</h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
