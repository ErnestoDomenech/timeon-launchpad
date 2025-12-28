import { AlertCircle, XCircle, Clock, FileWarning, Users } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    text: "Tus empleados no fichan o lo hacen mal",
  },
  {
    icon: AlertCircle,
    text: "Nadie quiere instalar otra app",
  },
  {
    icon: FileWarning,
    text: "RRHH vive con el miedo a una inspección",
  },
  {
    icon: Clock,
    text: "Registros desordenados o incompletos",
  },
  {
    icon: Users,
    text: "El fichaje genera conflictos diarios",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl">
            ¿Te suena alguna de estas situaciones?
          </h2>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 text-left transition-all hover:border-destructive/50 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <problem.icon className="h-5 w-5 text-destructive" />
                </div>
                <span className="text-lg text-foreground">{problem.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-primary/5 p-6">
            <p className="text-lg font-medium text-foreground">
              El problema no es la ley.{" "}
              <span className="text-primary">
                El problema es cómo se está intentando cumplir.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
