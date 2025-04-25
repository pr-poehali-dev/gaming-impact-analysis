import { Link } from "react-router-dom";
import { GameController } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GameController className="h-6 w-6 text-gaming-primary" />
              <span className="text-xl font-bold">Игровой Баланс</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Информационный ресурс о влиянии компьютерных игр на человека
              и методах борьбы с игровой зависимостью.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-sm">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/effects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Влияние на психику
                </Link>
              </li>
              <li>
                <Link to="/physical-effects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Физическое здоровье
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Методы борьбы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-2">Контакты</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Алексей Храмков</p>
              <p className="text-sm text-muted-foreground">Телефон: 89202286637</p>
              <Link to="/contacts" className="text-sm text-gaming-primary hover:underline">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Игровой Баланс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
