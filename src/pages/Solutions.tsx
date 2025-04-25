import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Clock, CheckCircle2, Gamepad2, Brain, HeartPulse, 
  Timer, UserPlus, Activity, BookOpen
} from "lucide-react";

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Методы борьбы с игровой зависимостью
            </h1>
            <p className="text-xl text-muted-foreground">
              Практические рекомендации и подходы для контроля над временем в играх и преодоления зависимости
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <Clock className="mr-3 h-8 w-8 text-gaming-primary" />
                Управление игровым временем
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Timer className="mr-2 h-5 w-5 text-gaming-primary" />
                      Установка временных ограничений
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Использование таймеров и приложений для отслеживания времени в играх</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Создание расписания игровых сессий с фиксированной продолжительностью</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Регулярные перерывы каждые 45-60 минут активной игры</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-gaming-primary" />
                      Альтернативные виды деятельности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Физическая активность: спорт, прогулки, танцы</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Творческие занятия: рисование, музыка, кулинария</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Социальное взаимодействие: встречи с друзьями в реальной жизни</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <Brain className="mr-3 h-8 w-8 text-gaming-primary" />
                Психологические подходы
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserPlus className="mr-2 h-5 w-5 text-gaming-primary" />
                      Профессиональная помощь
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Консультация психолога или психотерапевта</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Групповая терапия и поддержка для людей с игровой зависимостью</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Когнитивно-поведенческая терапия для изменения привычек</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-gaming-primary" />
                      Самопомощь и осознанность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Ведение дневника игровой активности для анализа привычек</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Практики осознанности и медитации для контроля импульсов</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gaming-primary" />
                        <span>Техники постановки целей и отслеживания прогресса</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-12 bg-gaming-muted">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Практические советы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Технологические решения</CardTitle>
                <CardDescription>Использование программного обеспечения для контроля</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">1.</span>
                    <span>Установка приложений для блокировки игр в определенные часы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">2.</span>
                    <span>Использование программ родительского контроля</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">3.</span>
                    <span>Таймеры напоминаний о перерывах во время игры</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Для родителей</CardTitle>
                <CardDescription>Помощь детям в контроле игровой активности</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">1.</span>
                    <span>Открытая коммуникация о значении и месте игр в жизни</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">2.</span>
                    <span>Совместное создание правил использования игр</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">3.</span>
                    <span>Предложение увлекательных альтернатив компьютерным играм</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Социальная поддержка</CardTitle>
                <CardDescription>Привлечение окружения для помощи</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">1.</span>
                    <span>Поддержка друзей и семьи в преодолении зависимости</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">2.</span>
                    <span>Участие в группах поддержки онлайн или офлайн</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gaming-primary font-bold mr-2">3.</span>
                    <span>Совместные активности, не связанные с играми</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Gamepad2 className="h-16 w-16 mx-auto text-gaming-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Нужна консультация?</h2>
            <p className="text-muted-foreground">
              Если вы или ваш близкий человек столкнулись с проблемой игровой зависимости, 
              свяжитесь с нами для получения квалифицированной помощи и рекомендаций.
            </p>
            <Button asChild size="lg">
              <Link to="/contacts">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
