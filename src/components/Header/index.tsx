import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BiUser, BiCart } from "react-icons/bi";
import { useRef, useState } from "react";

import LogoIcon from "@components/Icons/Logo";
import Modal from "@components/Modal";
import CartModal from "@components/Modal/CartModal";
import AuthModal from "@components/Modal/AuthModal";

const offsetY = [0, 100];
const heightSizes = [32, 0];

const Header = () => {
  const { scrollY } = useScroll();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const height = useTransform(scrollY, offsetY, heightSizes);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const [isCartModal, setIsCartModal] = useState(false);

  const onMenuOpen = () => {
    console.log("open menu");
  };

  const onSubmit = () => {
    console.log(inputRef.current?.value);
  };

  const onToggleAuthModal = () => {
    setIsAuthModal((prevState) => !prevState);
  };

  const onToggleCartModal = () => {
    setIsCartModal((prevState) => !prevState);
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-center h-8 text-white bg-green-secondary cursor-pointer"
        style={{ height }}
      >
        <Link href="/discounts" passHref>
          <p className="font-bold uppercase tracking-wider">
            Цены дрожат
            <span className="ml-2 text-yellow-300">до -50%</span>
          </p>
        </Link>
      </motion.div>

      <header className="sticky top-0 flex items-center h-20 px-20 text-white bg-zinc-900 z-10">
        <button
          className="p-2 mr-5 rounded hover:bg-zinc-100 hover:text-black"
          onClick={onMenuOpen}
        >
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
            className="h-full px-4 text-base bg-green-primary"
          >
            Найти
          </button>
        </div>

        <button
          className="p-2 mr-5 rounded hover:bg-zinc-100 hover:text-black"
          onClick={onToggleAuthModal}
        >
          <BiUser fontSize={32} />
        </button>

        <button
          className="p-2 rounded hover:bg-zinc-100 hover:text-black"
          onClick={onToggleCartModal}
        >
          <BiCart fontSize={32} />
        </button>
      </header>

      <Modal isOpen={isAuthModal} onClose={onToggleAuthModal} title="Вход">
        <AuthModal />
      </Modal>

      <Modal isOpen={isCartModal} onClose={onToggleCartModal} title="Корзина">
        <CartModal />
      </Modal>
    </>
  );
};

export default Header;
