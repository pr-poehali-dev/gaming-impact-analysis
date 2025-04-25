import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gaming-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-gaming-light" />
              <span className="text-xl font-bold text-white">Игровой Баланс</span>
            </Link>
            <p className="text-sm text-gray-400">
              Помогаем найти баланс между виртуальным миром и реальной жизнью
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/effects" className="text-gray-400 hover:text-white transition-colors">
                  Влияние игр
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Методы борьбы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Телефон: 89202286637
              </li>
              <li className="text-gray-400">
                Email: info@igrovoybalans.ru
              </li>
              <li className="text-gray-400">
                Адрес: г. Москва, ул. Игровая, д. 42
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                VK
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Игровой Баланс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
