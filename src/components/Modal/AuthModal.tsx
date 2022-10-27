import Image from "next/image";
import React, { useState } from "react";

import LoginForm from "@components/LoginForm";
import RegisterForm from "@components/RegisterForm";
import VerticalDividerWithLabel from "@components/VerticalDividerWithLabel";

import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";

const AuthModal = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const onToggleRegisterForm = () => {
    setIsRegisterForm((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-[7fr_1fr_4fr] w-[35vw] p-6">
      {isRegisterForm ? (
        <RegisterForm onToggleRegisterForm={onToggleRegisterForm} />
      ) : (
        <LoginForm onToggleRegisterForm={onToggleRegisterForm} />
      )}

      <VerticalDividerWithLabel label="или" />

      <div>
        <p className="mb-4 text-sm text-center text-zinc-500">
          Войти как пользователь
        </p>

        <button className="flex items-center justify-center w-full h-12 mb-4 rounded border border-zinc-300 bg-zinc-200 hover:bg-gray-300">
          <Image
            width={18}
            height={18}
            src={facebook}
            alt="facebook logo"
            objectFit="contain"
          />
          <span className="ml-2 text-lg font-medium text-sky-600">
            Facebook
          </span>
        </button>

        <button className="flex items-center justify-center w-full h-12 rounded border border-zinc-300 bg-zinc-200  hover:bg-gray-300">
          <Image
            width={20}
            height={20}
            src={google}
            alt="google logo"
            objectFit="contain"
          />
          <span className="ml-2 text-lg font-medium text-sky-600">Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
