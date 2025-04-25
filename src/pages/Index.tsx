import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Brain, HeartPulse, Clock, ArrowRight, Gamepad2 } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Влияние компьютерных игр на человека
            </h1>
            <p className="text-xl text-muted-foreground">
              Исследование воздействия компьютерных игр на психику, здоровье и социальные аспекты жизни человека
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/effects">Узнать о влиянии</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/solutions">Методы борьбы с зависимостью</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4">Виды влияния компьютерных игр</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Компьютерные игры могут оказывать различное воздействие на психологическое, 
              физическое состояние и социальную жизнь человека
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-gaming-muted p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Brain className="h-6 w-6 text-gaming-primary" />
                </div>
                <CardTitle>Психологическое влияние</CardTitle>
                <CardDescription>Как игры влияют на психику и эмоциональное состояние</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Развитие зависимости и игромании</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Влияние на эмоциональное состояние</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Изменение поведения в реальной жизни</span>
                  </li>
                </ul>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link to="/effects" className="flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-gaming-muted p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <HeartPulse className="h-6 w-6 text-gaming-primary" />
                </div>
                <CardTitle>Физическое здоровье</CardTitle>
                <CardDescription>Воздействие на физическое состояние и здоровье</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Нагрузка на зрение и позвоночник</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Малоподвижный образ жизни</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Нарушение режима сна и отдыха</span>
                  </li>
                </ul>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link to="/physical-effects" className="flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-gaming-muted p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-gaming-primary" />
                </div>
                <CardTitle>Методы борьбы</CardTitle>
                <CardDescription>Способы контроля и преодоления зависимости</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Эффективное управление игровым временем</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Альтернативные виды деятельности</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary mr-2">•</span> 
                    <span>Профессиональная помощь при зависимости</span>
                  </li>
                </ul>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link to="/solutions" className="flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gaming-muted py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна помощь с игровой зависимостью?
              </h2>
              <p className="text-muted-foreground mb-6">
                Если вы или ваши близкие столкнулись с проблемой игровой зависимости, 
                обратитесь за консультацией. Мы поможем подобрать эффективные методы решения.
              </p>
              <Button asChild size="lg">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
            <div className="flex-shrink-0 w-64 h-64 flex items-center justify-center bg-white rounded-full shadow-lg">
              <Gamepad2 className="h-24 w-24 text-gaming-primary" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
