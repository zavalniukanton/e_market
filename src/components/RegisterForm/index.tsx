interface RegisterFormProps {
  onToggleRegisterForm: () => void;
}

const RegisterForm = ({ onToggleRegisterForm }: RegisterFormProps) => {
  return (
    <form className="flex flex-col">
      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">Имя</span>
        <input
          type="text"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 hidden peer-invalid:block text-pink-600 text-xs">
          Wrong name length
        </p>
      </label>

      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">Фамилия</span>
        <input
          type="text"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 hidden peer-invalid:block text-pink-600 text-xs">
          Wrong surname length
        </p>
      </label>

      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">Номер телефона</span>
        <input
          type="text"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 hidden peer-invalid:block text-pink-600 text-xs">
          Wrong telephone number format
        </p>
      </label>

      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">Эл. почта</span>
        <input
          type="email"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 hidden peer-invalid:block text-pink-600 text-xs">
          Введен неверный адрес эл.почты
        </p>
      </label>

      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">Придумайте пароль</span>
        <input
          type="password"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 hidden peer-invalid:block text-pink-600 text-xs">
          Введен неверный пароль
        </p>
      </label>

      <p className="mb-4 text-sm text-zinc-500">
        Регистрируясь, вы соглашаетесь с условиями{" "}
        <a
          href="/privacy"
          target="_blanket"
          className="text-sky-600 hover:text-orange-500 cursor-pointer"
        >
          положения о сборе и защите персональных данных
        </a>{" "}
        и{" "}
        <a
          href="/legal_terms"
          target="_blanket"
          className="text-sky-600 hover:text-orange-500 cursor-pointer"
        >
          пользовательским соглашением
        </a>
      </p>

      <button
        type="submit"
        className="w-full h-12 mb-2 rounded font-medium text-lg text-white bg-[#00a046] hover:bg-green-500"
      >
        Зарегистрироваться
      </button>

      <span
        className="text-center text-sky-600 hover:text-orange-500 cursor-pointer"
        onClick={onToggleRegisterForm}
      >
        Я уже зарегистрирован
      </span>
    </form>
  );
};

export default RegisterForm;
