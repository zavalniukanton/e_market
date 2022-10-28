import Link from "next/link";
import { BsClock } from "react-icons/bs";

import SocialList from "@components/SocialList";
import { footerNavigationLinks } from "@assets/data/footerNavigationLinks";

import FooterLinkList from "./FooterLinkList";

const MiddleSection = () => {
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
          data={footerNavigationLinks.companyInfo}
        />
        <FooterLinkList listTitle="Помощь" data={footerNavigationLinks.help} />
        <FooterLinkList
          listTitle="Сервисы"
          data={footerNavigationLinks.services}
        />
        <FooterLinkList
          listTitle="Партнерам"
          data={footerNavigationLinks.partners}
        />
      </div>
    </div>
  );
};

export default MiddleSection;
