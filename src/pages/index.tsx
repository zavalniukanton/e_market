import { homePageSliderData } from "@assets/data/homePageSliderData";
import { recentGoods } from "@assets/data/recentGoods";
import { smartBandsBestsellers } from "@assets/data/smartBandsBestsellers";
import { promotionalOffers } from "@assets/data/promotionalOffers";
import Carousel from "@components/Carousel";
import Sidebar from "@components/Sidebar";
import AllPromotionsButton from "@components/AllPromotionsButton";
import ProductsSection from "@components/ProductsSection";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex px-20 pt-6 pb-12">
      <Sidebar />

      <div className="w-full pl-10 overflow-x-hidden">
        <div className="w-[1200px] mb-16">
          <Carousel data={homePageSliderData} />
          <AllPromotionsButton />
        </div>

        <ProductsSection
          title="Последние просмотренные товары"
          products={recentGoods}
        />

        <ProductsSection
          title=" Бестселлеры в категории Фитнес-браслеты"
          products={smartBandsBestsellers}
        />

        <ProductsSection
          title="Акционные предложения"
          products={promotionalOffers}
        />

        {/* <section className="mb-16">
          <h2 className="mb-4 text-xl">Горячие новинки</h2>
          <div className="grid grid-cols-6 gap-2">
            <ProductCard />
          </div>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="mb-4 text-xl">
            Чаще всего добавляют в список желаний
          </h2>
          <div className="grid grid-cols-6 gap-2">
            <ProductCard />
          </div>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="mb-4 text-xl">Самые ожидаемые</h2>
          <div className="grid grid-cols-6 gap-2">
            <ProductCard />
          </div>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="mb-4 text-xl">Самые обсуждаемые товары</h2>
          <div className="grid grid-cols-6 gap-2">
            <ProductCard />
          </div>
        </section> */}

        {/* <section>
          <h2 className="mb-4 text-xl">Сейчас пользуются спросом</h2>
          <div className="grid grid-cols-6 gap-2">
            <ProductCard />
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Home;
