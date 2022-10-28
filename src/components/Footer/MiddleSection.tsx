import Link from "next/link";
import { BsClock } from "react-icons/bs";

import SocialList from "@components/SocialList";

import FooterLinkList from "./FooterLinkList";

const MiddleSection = () => {
  const NAVIGATION_LIST = {
    companyInfo: [
      { path: "/about-us", name: "O нас" },
      { path: "/our-regulations", name: "Условия использования сайта" },
      { path: "/contacts", name: "Контакты" },
    ],
    help: [
      { path: "/delivery-and-paymen", name: "Доставка та оплата" },
      { path: "/credit", name: "Кредит" },
      { path: "/warranty", name: "Гарантия" },
      { path: "/goods-return", name: "Возврат товара" },
      { path: "/service-centers", name: "Сервисные центры" },
    ],
    services: [
      { path: "/bonus-account", name: "Бонусный счёт" },
      { path: "/rozetka-premium", name: "Rozetka Premium" },
      { path: "/gift-certificates", name: "Подарочные сертификаты" },
      { path: "/rozetka-exchange", name: "Rozetka Обмен" },
      { path: "/tours-and-vacations", name: "Туры и отдых" },
    ],
    partners: [
      { path: "/sales", name: "Продавать на Розетке" },
      { path: "/partnership", name: "Сотрудничество c нами" },
      { path: "/franchising", name: "Франчайзинг" },
      { path: "/rental", name: "Аренда помещений" },
    ],
  };

  return (
    <div className="flex px-20 py-5 border-b border-b-zinc-300">
      <div className="mr-20">
        <Link href="/call-center">
          <a className="flex items-center mb-5 text-sky-600 hover:text-orange-500">
            <BsClock />
            <p className="ml-2 text-sm">График работы Call-центра</p>
          </a>
        </Link>
        <SocialList />
      </div>

      <div className="grid grid-cols-4 gap-20">
        <FooterLinkList
          listTitle="Информация o компании"
          data={NAVIGATION_LIST.companyInfo}
        />
        <FooterLinkList listTitle="Помощь" data={NAVIGATION_LIST.help} />
        <FooterLinkList listTitle="Сервисы" data={NAVIGATION_LIST.services} />
        <FooterLinkList listTitle="Партнерам" data={NAVIGATION_LIST.partners} />
      </div>
    </div>
  );
};

export default MiddleSection;
