import {
  TbDeviceGamepad2,
  TbArmchair,
  TbBath,
  TbShirt,
  TbGlassFull,
  TbPlant,
} from "react-icons/tb";
import { CgLaptop, CgSmartphone, CgSmartHomeWashMachine } from "react-icons/cg";
import { MdSportsTennis, MdOutlineCleanHands } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { RiBearSmileLine, RiBaiduLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { HiOutlinePaperClip } from "react-icons/hi";

export const sidebarLinks = [
  {
    path: "/laptops-computers",
    name: "Ноутбуки та компьютеры",
    icon: <CgLaptop size={24} color="#adb8c8" />,
  },
  {
    path: "/smartphones-tv-electronics",
    name: "Смартфоны, ТВ и электроника",
    icon: <CgSmartphone size={24} color="#adb8c8" />,
  },
  {
    path: "/game-zone",
    name: "Товары для геймеров",
    icon: <TbDeviceGamepad2 size={24} color="#adb8c8" />,
  },
  {
    path: "/home-appliances",
    name: "Бытовая техника",
    icon: <CgSmartHomeWashMachine size={24} color="#adb8c8" />,
  },
  {
    path: "/household-goods",
    name: "Товары для дома",
    icon: <TbArmchair size={24} color="#adb8c8" />,
  },
  {
    path: "/tools",
    name: "Инструменты и автотовары",
    icon: <VscTools size={24} color="#adb8c8" />,
  },
  {
    path: "/plumbing-repair",
    name: "Сантехника и ремонт",
    icon: <TbBath size={24} color="#adb8c8" />,
  },
  {
    path: "/garden",
    name: "Дача, сад, огород",
    icon: <TbPlant size={24} color="#adb8c8" />,
  },
  {
    path: "/sport",
    name: "Спорт и увлечения",
    icon: <MdSportsTennis size={24} color="#adb8c8" />,
  },
  {
    path: "/fashion",
    name: "Одежда, обувь и украшения",
    icon: <TbShirt size={24} color="#adb8c8" />,
  },
  {
    path: "/beauty",
    name: "Красота и здоровье",
    icon: <MdOutlineCleanHands size={24} color="#adb8c8" />,
  },
  {
    path: "/products-for-children",
    name: "Детские товары",
    icon: <RiBearSmileLine size={24} color="#adb8c8" />,
  },
  {
    path: "/pet-supplies",
    name: "Зоотовары",
    icon: <RiBaiduLine size={24} color="#adb8c8" />,
  },
  {
    path: "/office-and-books",
    name: "Офис, школа, книги",
    icon: <HiOutlinePaperClip size={24} color="#adb8c8" />,
  },
  {
    path: "/alcohol-products",
    name: "Алкогольные напитки и продукты",
    icon: <TbGlassFull size={24} color="#adb8c8" />,
  },
  {
    path: "/business-goods",
    name: "Товары для бизнеса и услуги",
    icon: <FaBarcode size={24} color="#adb8c8" />,
  },
];
