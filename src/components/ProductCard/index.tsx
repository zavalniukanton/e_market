import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

import { Product } from "@models/product.interface";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, oldPrice, currency, image } = product;

  return (
    <article className="relative p-4 border border-zinc-300 overflow-hidden">
      <button className="absolute right-4 p-2 rounded text-orange-500 hover:bg-zinc-100">
        <FaRegHeart fontSize={20} />
      </button>

      <Link href="#">
        <a className="flex justify-center my-6">
          <Image
            src={image}
            alt="product image"
            width={95}
            height={140}
            objectFit="contain"
          />
        </a>
      </Link>

      <Link href="#">
        <a className="text-sm line-clamp-2 hover:text-red-500 hover:underline">
          {title}
        </a>
      </Link>

      {!!oldPrice && (
        <p className="my-1 text-sm line-through text-zinc-400">
          {oldPrice} <span>{currency}</span>
        </p>
      )}

      <p
        className={`text-2xl ${oldPrice ? "text-red-500" : "text-black"} ${
          oldPrice ? "mt-0" : "mt-7"
        }`}
      >
        {price} <span className="text-lg">{currency}</span>
      </p>
    </article>
  );
};

export default ProductCard;
