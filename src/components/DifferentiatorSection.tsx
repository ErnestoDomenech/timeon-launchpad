import { X, Check, MessageCircle } from "lucide-react";

const comparisons = [
  {
    other: "Apps complejas que nadie entiende",
    timeon: "WhatsApp, que todos ya saben usar",
  },
  {
    other: "Mala adopción por parte del equipo",
    timeon: "Adopción inmediata desde el primer día",
  },
  {
    other: "Fichajes olvidados constantemente",
    timeon: "Tan fácil que nadie se olvida",
  },
  {
    other: "Formación y soporte técnico necesarios",
    timeon: "Cero formación, cero soporte",
  },
  {
    other: "Instalaciones y contraseñas",
    timeon: "Lenguaje natural, sin barreras",
  },
];

const DifferentiatorSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            TimeOn no es otro software de fichaje
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Es la forma natural de cumplir con la ley
          </p>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-2">
              <div className="bg-destructive/5 p-4 text-center font-semibold text-foreground">
                Otras soluciones
              </div>
              <div className="bg-primary/10 p-4 text-center font-semibold text-foreground">
                TimeOn
              </div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                <div className="flex items-center gap-3 bg-card p-4">
                  <X className="h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-sm text-muted-foreground md:text-base">
                    {item.other}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-accent/30 p-4">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground md:text-base">
                    {item.timeon}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center rounded-xl bg-primary p-8 text-center">
            <MessageCircle className="mb-4 h-12 w-12 text-primary-foreground" />
            <p className="text-xl font-semibold text-primary-foreground md:text-2xl">
              Tus empleados ya usan WhatsApp.
              <br />
              Nosotros lo hacemos legal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
