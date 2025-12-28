import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Clock } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-accent/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Empieza hoy. Sin riesgo.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Crea tu cuenta gratuita y empieza a fichar hoy mismo.
            <br />
            Sin tarjeta. Sin permanencia. Sin compromiso.
          </p>

          <div className="mb-8 inline-flex flex-col gap-3 text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Prueba gratuita sin límite de tiempo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Sin necesidad de tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">Cancela cuando quieras, sin preguntas</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="text-lg px-10 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Probar TimeOn gratis
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Configuración en menos de 5 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
