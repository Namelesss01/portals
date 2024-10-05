import { CircleCheckBig, X } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [isOpen, setIsOpen] = useState(true); // Состояние для отображения окна

  // Функция для закрытия окна
  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Если окно закрыто, ничего не рендерим

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative bg-white rounded-lg shadow-lg py-[50px] px-14 text-center max-w-[462px]">
        {/* Кнопка закрытия */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={closeModal}
        >
          <X className="w-6 h-6 z-10" />
        </button>

        <div className="text-blue-500 mb-7 flex justify-center">
          <CircleCheckBig className="w-24 h-24" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Вы были успешно зарегистрированы на портале
        </h2>
        <a
          href="/account"
          className="w-full block text-center py-3 mt-5 border-[#1875F0] text-sm font-medium text-[#1875F0] border"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default Register;
