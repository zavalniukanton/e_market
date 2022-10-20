import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import LogoIcon from "@components/Icons/Logo";

const Header = () => {
  const { scrollY } = useScroll();

  const offsetY = [0, 100];
  const heightSizes = [80, 40];

  const height = useTransform(scrollY, offsetY, heightSizes);

  return (
    <motion.header
      className="sticky top-0 flex jutsify-between items-center px-8 bg-slate-400"
      style={{ height }}
    >
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
    </motion.header>
  );
};

export default Header;
