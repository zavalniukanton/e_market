import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BiUser, BiCart } from "react-icons/bi";
import { useRef } from "react";

import LogoIcon from "@components/Icons/Logo";

const offsetY = [0, 100];
const heightSizes = [32, 0];

const Header = () => {
  const { scrollY } = useScroll();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const height = useTransform(scrollY, offsetY, heightSizes);

  const onMenuOpen = () => {
    console.log("open menu");
  };

  const onSubmit = () => {
    console.log(inputRef.current?.value);
  };

  const onAuth = () => {
    console.log("login");
  };

  const onCartOpen = () => {
    console.log("open cart");
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-center h-8  text-white bg-[#005C09] cursor-pointer"
        style={{ height }}
      >
        <Link href="/discounts" passHref>
          <p className="font-bold uppercase tracking-wider">
            Цены дрожат
            <span className="ml-2 text-yellow-300">до -50%</span>
          </p>
        </Link>
      </motion.div>

      <header className="sticky top-0 flex items-center h-20 px-20 text-white bg-zinc-900 z-50">
        <button className="p-1 mr-5 rounded" onClick={onMenuOpen}>
          <FiMenu fontSize={32} />
        </button>

        <Link href="/">
          <a>
            <LogoIcon />
          </a>
        </Link>

        <div className="flex items-center h-10 w-1/2 mx-auto rounded overflow-hidden">
          <button className="h-full px-3 text-zinc-500 bg-white">
            <FiSearch />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Я ищу..."
            className="h-full grow pr-3 text-base text-black focus:outline-none"
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="h-full px-4 text-base bg-[#00a046]"
          >
            Найти
          </button>
        </div>

        <button className="p-1 mr-5 rounded" onClick={onAuth}>
          <BiUser fontSize={32} />
        </button>

        <button className="p-1 rounded" onClick={onCartOpen}>
          <BiCart fontSize={32} />
        </button>
      </header>
    </>
  );
};

export default Header;
