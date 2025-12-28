import { MessageCircle, Clock, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "El empleado escribe en WhatsApp",
    description: '"Hola, estoy entrando"',
  },
  {
    icon: Clock,
    step: "2",
    title: "TimeOn registra automáticamente",
    description: "Hora, fecha y ubicación",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Todo queda guardado",
    description: "En informes legales listos para usar",
  },
];

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Así de fácil funciona TimeOn
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Tres pasos. Cero complicaciones.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-8 w-8 text-muted" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-accent p-8">
            <p className="text-xl font-medium text-foreground">
              Como hablar con una persona.{" "}
              <span className="text-primary">
                Pero con la tranquilidad de estar cubierto legalmente.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
