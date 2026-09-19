import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import TimeOnScoreLeadForm from "@/components/TimeOnScoreLeadForm";

type Dimension =
  | "registration"
  | "incidents"
  | "administration"
  | "traceability"
  | "experience";

type AnswerOption = {
  label: string;
  score: number;
};

type Question = {
  id: number;
  dimension: Dimension;
  text: string;
  options: AnswerOption[];
};

const questions: Question[] = [
  {
    id: 1,
    dimension: "registration",
    text: "¿Cómo registra actualmente la jornada tu equipo?",
    options: [
      { label: "Papel o Excel", score: 20 },
      { label: "Máquina o terminal físico", score: 50 },
      { label: "Aplicación específica", score: 75 },
      { label: "Móvil, web o herramienta habitual", score: 100 },
    ],
  },
  {
    id: 2,
    dimension: "registration",
    text: "¿El fichaje puede realizarse fácilmente desde distintos centros o ubicaciones?",
    options: [
      { label: "No", score: 20 },
      { label: "Solo con configuraciones especiales", score: 50 },
      { label: "Sí, pero requiere una app concreta", score: 75 },
      { label: "Sí, de forma sencilla", score: 100 },
    ],
  },
  {
    id: 3,
    dimension: "incidents",
    text: "¿Con qué frecuencia tenéis que corregir olvidos, errores o fichajes incompletos?",
    options: [
      { label: "Prácticamente todos los días", score: 20 },
      { label: "Varias veces por semana", score: 40 },
      { label: "Algunas veces al mes", score: 70 },
      { label: "Casi nunca", score: 100 },
    ],
  },
  {
    id: 4,
    dimension: "incidents",
    text: "Cuando hay una incidencia, ¿cómo se resuelve?",
    options: [
      { label: "Mensajes, llamadas o manualmente", score: 20 },
      { label: "Se registra, pero alguien debe gestionarla", score: 50 },
      { label: "Existe un flujo definido", score: 75 },
      { label: "Está prácticamente automatizado", score: 100 },
    ],
  },
  {
    id: 5,
    dimension: "administration",
    text: "¿Cuánto tiempo dedica alguien a revisar fichajes, incidencias y horarios?",
    options: [
      { label: "Más de 5 horas por semana", score: 20 },
      { label: "Entre 2 y 5 horas por semana", score: 40 },
      { label: "Entre 1 y 2 horas por semana", score: 70 },
      { label: "Menos de 1 hora por semana", score: 100 },
    ],
  },
  {
    id: 6,
    dimension: "administration",
    text: "¿Preparar informes o exportar información requiere trabajo manual?",
    options: [
      { label: "Mucho", score: 20 },
      { label: "Bastante", score: 40 },
      { label: "Algo", score: 70 },
      { label: "Prácticamente ninguno", score: 100 },
    ],
  },
  {
    id: 7,
    dimension: "traceability",
    text: "¿Puedes localizar fácilmente el histórico de un trabajador cuando lo necesitas?",
    options: [
      { label: "No, requiere buscar en varios sitios", score: 20 },
      { label: "Sí, pero lleva tiempo", score: 50 },
      { label: "Normalmente sí", score: 75 },
      { label: "Sí, inmediatamente", score: 100 },
    ],
  },
  {
    id: 8,
    dimension: "traceability",
    text: "¿La información de jornada está centralizada?",
    options: [
      { label: "No", score: 20 },
      { label: "Parcialmente", score: 50 },
      { label: "Sí, aunque usamos otras herramientas alrededor", score: 75 },
      { label: "Sí, completamente", score: 100 },
    ],
  },
  {
    id: 9,
    dimension: "experience",
    text: "¿Cuánto esfuerzo requiere para un nuevo empleado aprender a fichar?",
    options: [
      { label: "Requiere formación o explicaciones frecuentes", score: 20 },
      { label: "Necesita aprender una aplicación", score: 50 },
      { label: "Es bastante sencillo", score: 75 },
      { label: "Utiliza algo que ya conoce", score: 100 },
    ],
  },
  {
    id: 10,
    dimension: "experience",
    text: "¿Cómo describirías vuestro control horario actualmente?",
    options: [
      { label: "Nos genera problemas", score: 20 },
      { label: "Funciona, pero consume demasiado tiempo", score: 45 },
      { label: "Funciona razonablemente bien", score: 75 },
      { label: "Apenas tenemos que pensar en él", score: 100 },
    ],
  },
];

const weights: Record<Dimension, number> = {
  registration: 0.15,
  incidents: 0.2,
  administration: 0.25,
  traceability: 0.2,
  experience: 0.2,
};

const labels: Record<Dimension, string> = {
  registration: "Registro",
  incidents: "Incidencias",
  administration: "Administración",
  traceability: "Trazabilidad",
  experience: "Experiencia del equipo",
};

const dimensionAdvice: Record<Dimension, string> = {
  registration:
    "Tu mayor oportunidad está en simplificar cómo y desde dónde ficha el equipo.",
  incidents:
    "Tu mayor oportunidad está en reducir correcciones, olvidos y gestión manual de incidencias.",
  administration:
    "Tu mayor oportunidad está después del fichaje: revisión, correcciones y preparación de información.",
  traceability:
    "Tu mayor oportunidad está en centralizar la información y recuperarla con rapidez cuando la necesitas.",
  experience:
    "Tu mayor oportunidad está en reducir la fricción que el sistema genera al equipo.",
};

const getLevel = (score: number) => {
  if (score <= 39) {
    return {
      name: "Control reactivo",
      description:
        "El registro y la gestión posterior dependen todavía de procesos manuales, correcciones o información dispersa.",
    };
  }

  if (score <= 59) {
    return {
      name: "Digitalizado, pero manual",
      description:
        "Has digitalizado parte del proceso, pero todavía existe demasiado trabajo después del fichaje.",
    };
  }

  if (score <= 79) {
    return {
      name: "Control eficiente",
      description:
        "Tu sistema funciona, aunque todavía hay puntos donde puedes reducir fricción y trabajo administrativo.",
    };
  }

  return {
    name: "Control optimizado",
    description:
      "Tu sistema de control horario es maduro y está bien estructurado, con pocas áreas críticas de mejora.",
  };
};

const TimeOnScore = () => {
  const [started, setStarted] = useState(false);
  const [companySize, setCompanySize] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];
  const selectedScore = answers[currentQuestion?.id];

  const result = useMemo(() => {
    if (!finished) return null;

    const dimensionScores = Object.keys(weights).reduce((acc, dimensionKey) => {
      const dimension = dimensionKey as Dimension;
      const related = questions.filter((question) => question.dimension === dimension);
      const scores = related.map((question) => answers[question.id] ?? 0);
      acc[dimension] = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
      return acc;
    }, {} as Record<Dimension, number>);

    const overall = Math.round(
      (Object.keys(weights) as Dimension[]).reduce(
        (sum, dimension) => sum + dimensionScores[dimension] * weights[dimension],
        0,
      ),
    );

    const weakestDimension = (Object.keys(dimensionScores) as Dimension[]).reduce(
      (weakest, dimension) =>
        dimensionScores[dimension] < dimensionScores[weakest] ? dimension : weakest,
      "registration",
    );

    return {
      overall,
      dimensionScores,
      weakestDimension,
      level: getLevel(overall),
    };
  }, [answers, finished]);

  const answerQuestion = (score: number) => {
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: score }));
  };

  const next = () => {
    if (selectedScore === undefined) return;

    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent((value) => value + 1);
  };

  const previous = () => {
    if (current === 0) return;
    setCurrent((value) => value - 1);
  };

  const restart = () => {
    setStarted(false);
    setCompanySize("");
    setCurrent(0);
    setAnswers({});
    setFinished(false);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <title>TimeOn Score | Diagnóstico de Control Horario</title>
        <meta
          name="description"
          content="Descubre en 2 minutos cuánto trabajo genera realmente tu sistema de control horario y obtén tu TimeOn Score."
        />
        <link rel="canonical" href="https://timeon.es/score" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border bg-background/95">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">TimeOn</span>
            </Link>
            <span className="text-sm font-medium text-muted-foreground">TimeOn Score</span>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10 md:py-16">
          {!started && !finished && (
            <section className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                Diagnóstico gratuito · 2 minutos
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                ¿Cuánto trabajo genera realmente tu control horario?
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Evalúa registro, incidencias, administración, trazabilidad y experiencia del equipo.
                Al terminar verás tu puntuación y tu principal oportunidad de mejora.
              </p>

              <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
                <label htmlFor="company-size" className="text-sm font-semibold">
                  ¿Cuántas personas forman tu equipo?
                </label>
                <select
                  id="company-size"
                  value={companySize}
                  onChange={(event) => setCompanySize(event.target.value)}
                  className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1-5">1–5</option>
                  <option value="6-10">6–10</option>
                  <option value="11-25">11–25</option>
                  <option value="26-50">26–50</option>
                  <option value="51-100">51–100</option>
                  <option value="100+">Más de 100</option>
                </select>

                <Button
                  size="lg"
                  className="mt-5 w-full"
                  disabled={!companySize}
                  onClick={() => setStarted(true)}
                >
                  Empezar diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                No necesitas registrarte para ver el resultado.
              </p>
            </section>
          )}

          {started && !finished && (
            <section className="mx-auto max-w-2xl">
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>Pregunta {current + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <span className="text-sm font-semibold text-primary">
                  {labels[currentQuestion.dimension]}
                </span>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">{currentQuestion.text}</h2>

                <div className="mt-8 grid gap-3">
                  {currentQuestion.options.map((option) => {
                    const active = selectedScore === option.score;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => answerQuestion(option.score)}
                        className={`flex w-full items-center justify-between rounded-xl border px-4 py-4 text-left transition ${
                          active
                            ? "border-primary bg-accent ring-2 ring-primary/20"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium">{option.label}</span>
                        {active && <CheckCircle2 className="h-5 w-5 text-primary" />}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <Button variant="outline" onClick={previous} disabled={current === 0}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>
                  <Button onClick={next} disabled={selectedScore === undefined}>
                    {current === questions.length - 1 ? "Ver mi resultado" : "Siguiente"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </section>
          )}

          {finished && result && (
            <section className="mx-auto max-w-4xl">
              <div className="text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Tu TimeOn Score
                </span>
                <div className="mt-3 text-7xl font-bold tracking-tight md:text-8xl">
                  {result.overall}
                  <span className="text-3xl text-muted-foreground">/100</span>
                </div>
                <h1 className="mt-4 text-3xl font-bold md:text-4xl">{result.level.name}</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  {result.level.description}
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {(Object.keys(result.dimensionScores) as Dimension[]).map((dimension) => (
                  <div key={dimension} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="text-sm font-semibold text-muted-foreground">{labels[dimension]}</div>
                    <div className="mt-2 text-3xl font-bold">{result.dimensionScores[dimension]}</div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${result.dimensionScores[dimension]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-primary/30 bg-accent p-6 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Tu principal oportunidad
                </span>
                <h2 className="mt-2 text-2xl font-bold">{labels[result.weakestDimension]}</h2>
                <p className="mt-3 text-lg">{dimensionAdvice[result.weakestDimension]}</p>
              </div>

              <div className="mt-8">
                <TimeOnScoreLeadForm
                  overallScore={result.overall}
                  dimensionScores={result.dimensionScores}
                  weakestDimension={labels[result.weakestDimension]}
                  teamSize={companySize}
                  currentSystem={questions[0].options.find((option) => option.score === answers[1])?.label}
                />
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 text-center">
                <Button size="lg" variant="outline" onClick={restart}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Repetir diagnóstico
                </Button>
                <p className="text-sm text-muted-foreground">
                  Tamaño de equipo declarado: {companySize}
                </p>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default TimeOnScore;
