import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Empieza el año cumpliendo la ley{" "}
              <span className="text-primary">sin complicarte la vida.</span>
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
              Control horario legal desde WhatsApp. Sin apps. Sin formación. Sin excusas.
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              TimeOn es el asistente inteligente que permite a tu equipo fichar la jornada laboral escribiendo un simple mensaje en WhatsApp. Automático, legal y pensado para PYMEs reales.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                Empieza gratis ahora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Ver cómo funciona
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            <div className="relative">
              <img
                src={heroPhone}
                alt="TimeOn - Control horario desde WhatsApp"
                className="w-full drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
