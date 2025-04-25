import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contacts = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами для получения консультации или дополнительной информации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Информация для связи</CardTitle>
                <CardDescription>
                  Вы можете связаться с нами любым удобным способом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gaming-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">89202286637</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gaming-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@gaming-balance.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gaming-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактное лицо</CardTitle>
                <CardDescription>
                  Специалист по работе с игровыми зависимостями
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gaming-muted flex items-center justify-center">
                  <span className="text-2xl font-bold text-gaming-primary">АХ</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Алексей Храмков</h3>
                  <p className="text-muted-foreground">Психолог, консультант по вопросам игровой зависимости</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Введите ваш email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="Введите ваш телефон" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите вашу ситуацию или задайте вопрос" 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
