import { Check, Shield, Users, Smartphone, MapPin, FileText, Bot } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Cumples la normativa sin complicaciones",
    description: "Todo conforme a la ley de control horario española",
  },
  {
    icon: Users,
    title: "Cero fricción para el empleado",
    description: "Sin curva de aprendizaje, empiezan al instante",
  },
  {
    icon: Smartphone,
    title: "No necesitas apps ni contraseñas",
    description: "Solo WhatsApp, que ya usan todos los días",
  },
  {
    icon: MapPin,
    title: "Ideal para equipos en movilidad",
    description: "Funciona desde cualquier lugar con cobertura",
  },
  {
    icon: FileText,
    title: "Informes automáticos listos para asesorías",
    description: "Exporta todo con un clic cuando lo necesites",
  },
  {
    icon: Bot,
    title: "Asistente con IA para dudas instantáneas",
    description: "Respuestas inmediatas a cualquier consulta",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Por qué las PYMEs eligen TimeOn
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Diseñado para resolver los problemas reales de las empresas pequeñas
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <benefit.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
