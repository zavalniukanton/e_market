import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import LogoIcon from "@components/Icons/Logo";

const Header = () => {
  const { scrollY } = useScroll();

  const offsetY = [0, 100];
  const heightSizes = [32, 0];

  const height = useTransform(scrollY, offsetY, heightSizes);

  return (
    <>
      <motion.div
        className="flex items-center justify-center h-8  text-white bg-[#00a046] cursor-pointer"
        style={{ height }}
      >
        <Link href="/discounts">
          <p className="font-bold uppercase tracking-wider">
            Цены дрожат
            <span className="ml-2 text-yellow-300">до -50%</span>
          </p>
        </Link>
      </motion.div>

      <header className="sticky top-0 flex jutsify-between items-center h-20 px-8 text-white bg-zinc-900 z-50">
        <Link href="/">
          <LogoIcon />
        </Link>

        <nav className="ml-auto">
          <ul className="flex jutsify-between items-center">
            <li className="ml-4 ">
              <p className="hover:text-amber-300 cursor-pointer">Catalogue</p>
            </li>
            <li className="ml-4 ">
              <p className="hover:text-amber-300 cursor-pointer">About us</p>
            </li>
            <li className="ml-4 ">
              <p className="hover:text-amber-300 cursor-pointer">Login</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
