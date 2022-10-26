import Image from "next/image";
import { BiCopyright } from "react-icons/bi";

import mastercard from "../../../public/images/mastercard-logo.png";
import visa from "../../../public/images/visa-logo.png";

const BottomSection = () => {
  return (
    <div className="flex items-center justify-end h-20 px-20 relative">
      <div className="absolute left-20 flex items-center">
        <div className="mr-4">
          <Image
            width={72}
            height={32}
            src={mastercard}
            alt="mastercard logo"
            objectFit="cover"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <Image
            width={72}
            height={32}
            src={visa}
            alt="visa logo"
            objectFit="cover"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="flex items-center">
        <BiCopyright />
        <p className="ml-1 text-xs">Интернет-магазин E-market, 2022</p>
      </div>
    </div>
  );
};

export default BottomSection;
