import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

import smart from "../../../public/images/smart_band.jpg";

const ProductCard = () => {
  return (
    <article className="relative p-4 border border-zinc-300">
      <span className="absolute right-4 p-2 rounded text-orange-500 hover:bg-zinc-100 hover:cursor-pointer">
        <FaRegHeart fontSize={20} />
      </span>

      <Link href="#">
        <a className="flex justify-center my-6">
          <Image src={smart} alt="product image" width={95} height={140} />
        </a>
      </Link>

      <Link href="#">
        <a className="text-sm hover:text-red-500 hover:underline">
          Xiaomi Mi Smart Band 7 Black (943155)
        </a>
      </Link>

      <p className="mt-4 text-2xl">
        1799 <span className="text-lg">₴</span>
      </p>
    </article>
  );
};

export default ProductCard;
