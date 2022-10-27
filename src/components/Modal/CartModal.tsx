import Image from "next/image";

import cart from "../../../public/images/cart.png";

const CartModal = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[50vw] px-6 pt-6 pb-12">
      <Image
        width={240}
        height={240}
        src={cart}
        alt="cart image"
        objectFit="contain"
      />
      <p className="mt-8 text-2xl text-center">Корзина пустая</p>
      <p className="mt-2 text-sm text-center text-zinc-500">
        Но это никогда не поздно исправить :)
      </p>
    </div>
  );
};

export default CartModal;
