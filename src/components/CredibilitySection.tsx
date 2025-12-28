import { Building2, Zap, GraduationCap, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Building2,
    text: "Pensado para PYMEs y autónomos",
  },
  {
    icon: Zap,
    text: "Funciona desde el primer día",
  },
  {
    icon: GraduationCap,
    text: "Sin formación ni soporte técnico",
  },
  {
    icon: TrendingUp,
    text: "Escalable a medida que crece tu equipo",
  },
];

const CredibilitySection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Diseñado para empresas reales
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            No somos una startup de Silicon Valley. Entendemos las necesidades de las PYMEs españolas.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-6 text-left"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 rounded-lg bg-accent p-4">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-foreground">
              <strong>Cumple con la normativa vigente</strong> de control horario en España
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
