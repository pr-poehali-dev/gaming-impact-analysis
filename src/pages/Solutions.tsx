import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Dumbbell, 
  BookOpen, 
  Users, 
  Shield, 
  CheckCircle2 
} from "lucide-react";

const Solutions = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Методы борьбы с игровой зависимостью</h1>
          <p className="text-xl text-muted-foreground">
            Практические рекомендации и подходы для контроля времени в играх и борьбы с игровой зависимостью
          </p>
        </div>

        {/* Введение */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              Игровая зависимость может незаметно войти в жизнь и стать серьезной проблемой, влияющей на психическое 
              и физическое здоровье, а также социальные взаимоотношения. Однако существуют эффективные методы 
              для контроля времени в играх и борьбы с уже сформировавшейся зависимостью.
            </p>
            <p>
              Важно помнить, что преодоление игровой зависимости — это процесс, требующий терпения, 
              поддержки и комплексного подхода. На этой странице мы предлагаем практические рекомендации, 
              которые помогут вам или вашим близким вернуть контроль над временем, проводимым в играх.
            </p>
          </div>
        </div>

        {/* Методы борьбы */}
        <div className="space-y-16">
          {/* Раздел 1: Самоконтроль и организация времени */}
          <section>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-gaming-muted rounded-full mb-4">
                <Clock className="h-8 w-8 text-gaming-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Самоконтроль и организация времени</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Установка временных лимитов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Определите конкретное время для игр и строго придерживайтесь его. Используйте таймеры или 
                    специальные приложения, которые будут напоминать о необходимости сделать перерыв.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Выделяйте не более 1-2 часов в день на игры</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Делайте 10-минутные перерывы каждый час</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Составление расписания дня</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Создайте детальное расписание дня, включая время для работы, учебы, игр, физической активности и общения 
                    с близкими. Это поможет сбалансировать различные сферы жизни.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Используйте ежедневник или планировщик</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Планируйте игры только после выполнения обязанностей</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Техника "Помидора"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Используйте технику "Помидора": 25 минут концентрированной работы или учебы, затем 5 минут отдыха. 
                    После 4 таких циклов делайте длительный перерыв в 15-30 минут.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Повышает продуктивность и самоконтроль</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Учит ценить время и рационально его использовать</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Раздел 2: Альтернативные активности */}
          <section>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-gaming-muted rounded-full mb-4">
                <Dumbbell className="h-8 w-8 text-gaming-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Альтернативные активности</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Физическая активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Регулярные физические упражнения не только улучшают здоровье, но и помогают снизить тягу к играм, 
                    вырабатывая эндорфины — природные стимуляторы хорошего настроения.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Ежедневные прогулки на свежем воздухе</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Запишитесь в спортивную секцию или фитнес-зал</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Творческие хобби</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Найдите творческое увлечение, которое будет вызывать не меньше интереса, чем игры. Это может быть 
                    рисование, музыка, фотография, кулинария или другие виды творчества.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Запишитесь на курсы или мастер-классы</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Присоединитесь к тематическим сообществам</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Саморазвитие</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Инвестируйте время в саморазвитие: изучение новых языков, чтение книг, прохождение онлайн-курсов. 
                    Это даст чувство прогресса и достижения, которое часто ищут в играх.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Выделите 30 минут в день на чтение</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Запишитесь на образовательные платформы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Раздел 3: Профессиональная помощь */}
          <section>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-gaming-muted rounded-full mb-4">
                <Users className="h-8 w-8 text-gaming-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Профессиональная помощь</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Психологическая поддержка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Если самостоятельные методы не помогают, важно обратиться к психологу или психотерапевту. 
                    Они помогут выявить корневые причины зависимости и разработать индивидуальный план ее преодоления.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Когнитивно-поведенческая терапия эффективна при игровой зависимости</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Групповая терапия позволяет получить поддержку от людей с подобным опытом</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Группы поддержки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Присоединение к группам поддержки для людей с игровой зависимостью может быть очень эффективным. 
                    Общение с теми, кто успешно справился с этой проблемой, дает мотивацию и практические советы.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Поищите специализированные онлайн-форумы и сообщества</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-gaming-primary mr-2 mt-0.5" />
                      <span>Обратитесь в местные центры психологической помощи</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Раздел: Заключение и призыв к действию */}
        <div className="bg-gaming-muted p-8 rounded-lg mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Начните действовать уже сегодня</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Борьба с игровой зависимостью требует последовательных действий и поддержки. Не откладывайте первый шаг — 
              начните с малого, постепенно заменяя время игр другими активностями и соблюдая установленные лимиты.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="animate-pulse">
                <Link to="/contacts">Получить консультацию</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
