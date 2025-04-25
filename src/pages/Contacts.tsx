import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, User, MessageSquare, Send } from "lucide-react";

const Contacts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения помощи в борьбе с игровой зависимостью
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-gaming-muted p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-gaming-primary" />
                </div>
                <CardTitle className="mt-4">Телефон</CardTitle>
                <CardDescription>Позвоните нам для консультации</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">89202286637</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-gaming-muted p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-gaming-primary" />
                </div>
                <CardTitle className="mt-4">Email</CardTitle>
                <CardDescription>Напишите нам на почту</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@igrovoybalans.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Отвечаем в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-gaming-muted p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gaming-primary" />
                </div>
                <CardTitle className="mt-4">Адрес</CardTitle>
                <CardDescription>Приходите на консультацию</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">г. Москва, ул. Игровая, д. 42</p>
                <p className="text-sm text-muted-foreground mt-1">По предварительной записи</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Наш специалист</h2>
              <p className="text-muted-foreground">Квалифицированный психолог, специализирующийся на игровой зависимости</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gaming-muted rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-24 w-24 text-gaming-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Алексей Храмков</h3>
                <p className="text-muted-foreground mb-4">
                  Психолог с 10-летним опытом работы в области игровой зависимости. 
                  Помог более 500 клиентам вернуться к полноценной жизни без зависимости от компьютерных игр.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gaming-muted px-3 py-1 rounded-full text-sm">Когнитивно-поведенческая терапия</div>
                  <div className="bg-gaming-muted px-3 py-1 rounded-full text-sm">Семейное консультирование</div>
                  <div className="bg-gaming-muted px-3 py-1 rounded-full text-sm">Работа с подростками</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 bg-gaming-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Ваше имя" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Ваш email" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Ваш телефон" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea 
                        placeholder="Опишите вашу ситуацию или вопрос" 
                        className="pl-10 min-h-[120px]" 
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
