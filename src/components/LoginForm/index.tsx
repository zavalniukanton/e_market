interface LoginFormProps {
  onToggleRegisterForm: () => void;
}

const LoginForm = ({ onToggleRegisterForm }: LoginFormProps) => {
  return (
    <form className="flex flex-col">
      <label className="block mb-4">
        <span className="block text-sm text-zinc-500">
          Эл. почта или телефон
        </span>
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
        <span className="block text-sm text-zinc-500">Пароль</span>
        <input
          type="password"
          className="block peer w-full mt-1 px-3 py-2 border border-zinc-300 rounded text-base bg-white 
            focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-xs">
          Введен неверный пароль
        </p>
      </label>

      <button
        type="submit"
        className="w-full h-12 mb-2 rounded font-medium text-lg text-white bg-green-primary hover:bg-green-500"
      >
        Войти
      </button>

      <span
        className="text-center text-sky-600 hover:text-orange-500 cursor-pointer"
        onClick={onToggleRegisterForm}
      >
        Зарегистрироваться
      </span>
    </form>
  );
};

export default LoginForm;
