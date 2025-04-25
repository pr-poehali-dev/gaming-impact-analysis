import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Brain, Users, Award, Heart } from "lucide-react";

const Solutions = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Методы борьбы с игровой зависимостью</h1>
          <p className="text-xl text-muted-foreground">
            Практические рекомендации и стратегии для преодоления зависимости от компьютерных игр
          </p>
        </div>

        <Tabs defaultValue="time" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="time">Управление временем</TabsTrigger>
            <TabsTrigger value="activities">Альтернативы</TabsTrigger>
            <TabsTrigger value="professional">Профессиональная помощь</TabsTrigger>
          </TabsList>
          
          <TabsContent value="time" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gaming-primary" /> 
                  Управление игровым временем
                </CardTitle>
                <CardDescription>
                  Стратегии для контроля времени, проводимого за играми
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Установите четкие временные рамки</h3>
                  <p className="text-muted-foreground">
                    Определите конкретное время для игр и строго придерживайтесь этого расписания. 
                    Используйте таймер для контроля игровых сессий.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Создайте расписание дня</h3>
                  <p className="text-muted-foreground">
                    Разработайте ежедневное расписание, которое включает работу, учебу, физическую активность, 
                    общение с близкими и только потом — время для игр.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Используйте программы-ограничители</h3>
                  <p className="text-muted-foreground">
                    Установите специальные приложения, которые будут контролировать время, 
                    проведенное за играми, и блокировать доступ после превышения лимита.
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
                    <li>Cold Turkey</li>
                    <li>Freedom</li>
                    <li>StayFocusd (для браузера)</li>
                    <li>Родительский контроль в операционных системах</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-gaming-primary" /> 
                  Альтернативные виды деятельности
                </CardTitle>
                <CardDescription>
                  Замещение игр более полезными и интересными занятиями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gaming-muted p-2 rounded-full mr-4">
                        <Heart className="h-4 w-4 text-gaming-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Физическая активность</h3>
                        <p className="text-sm text-muted-foreground">
                          Спорт, фитнес, бег, плавание или просто прогулки на свежем воздухе могут стать 
                          отличной альтернативой играм и улучшат физическое состояние.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gaming-muted p-2 rounded-full mr-4">
                        <Brain className="h-4 w-4 text-gaming-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Творческие хобби</h3>
                        <p className="text-sm text-muted-foreground">
                          Рисование, музыка, фотография, кулинария — найдите занятие, которое будет приносить 
                          удовольствие и развивать новые навыки.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gaming-muted p-2 rounded-full mr-4">
                        <Users className="h-4 w-4 text-gaming-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Социальная активность</h3>
                        <p className="text-sm text-muted-foreground">
                          Встречи с друзьями, участие в клубах по интересам, волонтерство — живое общение 
                          не заменят виртуальные контакты.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gaming-muted p-2 rounded-full mr-4">
                        <Calendar className="h-4 w-4 text-gaming-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Образование и саморазвитие</h3>
                        <p className="text-sm text-muted-foreground">
                          Курсы, чтение книг, изучение языков — вкладывайте время в саморазвитие, которое 
                          принесет практическую пользу в будущем.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="professional" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-gaming-primary" /> 
                  Профессиональная помощь
                </CardTitle>
                <CardDescription>
                  Когда самостоятельные методы недостаточно эффективны
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Признаки серьезной зависимости</h3>
                  <p className="text-muted-foreground mb-2">
                    Следующие признаки могут указывать на необходимость обращения к специалисту:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Неспособность контролировать время в игре</li>
                    <li>Пренебрежение базовыми потребностями (сон, питание)</li>
                    <li>Потеря интереса к другим видам деятельности</li>
                    <li>Проблемы в учебе/работе из-за игр</li>
                    <li>Раздражительность при невозможности играть</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Виды профессиональной помощи</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Психотерапия</h4>
                      <p className="text-sm text-muted-foreground">
                        Когнитивно-поведенческая терапия помогает изменить деструктивные мысли и поведение, 
                        связанные с игровой зависимостью.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Группы поддержки</h4>
                      <p className="text-sm text-muted-foreground">
                        Общение с людьми, столкнувшимися с подобной проблемой, даёт поддержку и мотивацию 
                        для преодоления зависимости.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Семейная терапия</h4>
                      <p className="text-sm text-muted-foreground">
                        Вовлечение семьи в процесс лечения может значительно повысить эффективность терапии 
                        и укрепить поддержку.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Специализированные центры</h4>
                      <p className="text-sm text-muted-foreground">
                        В случаях тяжелой зависимости могут быть рекомендованы реабилитационные программы 
                        в специализированных центрах.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Solutions;
