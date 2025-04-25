import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <AlertTriangle className="h-20 w-20 text-gaming-primary mb-6" />
        <h1 className="text-4xl font-bold mb-4">404 - Страница не найдена</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild size="lg">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
