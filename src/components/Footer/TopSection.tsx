import Image from "next/image";

import googleStore from "../../../public/images/google-play.png";
import appStore from "../../../public/images/appstore.png";

const TopSection = () => {
  return (
    <div className="flex items-center py-4 px-20 text-white bg-[#00a046]">
      <p className="grow text-xl text-center">Скачивайте наши приложения</p>
      <div className="flex items-center">
        <a
          href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion"
          target="_blanket"
          className="inline-flex mr-4"
        >
          <Image
            width={128}
            height={40}
            src={googleStore}
            alt="google play"
            objectFit="contain"
          />
        </a>
        <a
          href="https://apps.apple.com/app/apple-store/id740469631"
          target="_blanket"
          className="inline-flex"
        >
          <Image
            width={128}
            height={40}
            src={appStore}
            alt="apple store"
            objectFit="contain"
          />
        </a>
      </div>
    </div>
  );
};

export default TopSection;
