import { Link } from "react-router-dom";
import React from "react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { GameController, Brain, HeartPulse, Info, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GameController className="h-6 w-6 text-gaming-primary" />
          <span className="text-xl font-bold">Игровой Баланс</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Влияние игр</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/effects"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gaming-muted to-gaming-light p-6 no-underline outline-none focus:shadow-md"
                      >
                        <Brain className="h-6 w-6 text-gaming-primary" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Влияние на психику
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Исследование психологических аспектов влияния компьютерных игр
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem to="/physical-effects" title="Физическое здоровье" icon={<HeartPulse className="h-4 w-4 mr-2 text-gaming-primary" />}>
                    Влияние на здоровье и физическое состояние
                  </ListItem>
                  <ListItem to="/benefits" title="Положительные стороны" icon={<Brain className="h-4 w-4 mr-2 text-gaming-primary" />}>
                    Развитие навыков и позитивное влияние
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/solutions" className={navigationMenuTriggerStyle()}>
                Методы борьбы
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                О проекте
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contacts" className={navigationMenuTriggerStyle()}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
