import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type DimensionScores = {
  registration: number;
  incidents: number;
  administration: number;
  traceability: number;
  experience: number;
};

type Props = {
  overallScore: number;
  dimensionScores: DimensionScores;
  weakestDimension: string;
  teamSize: string;
  currentSystem?: string;
};

const TimeOnScoreLeadForm = ({
  overallScore,
  dimensionScores,
  weakestDimension,
  teamSize,
  currentSystem,
}: Props) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsContact, setWantsContact] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const apiBase = (import.meta.env.VITE_TIMEON_SCORE_API_URL ?? "").replace(/\/$/, "");

    if (!apiBase) {
      setStatus("error");
      setErrorMessage("La conexión del diagnóstico todavía no está configurada.");
      return;
    }

    try {
      const response = await fetch(`${apiBase}/api/public/timeon-score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone: phone || null,
          teamSize,
          overallScore,
          registrationScore: dimensionScores.registration,
          incidentsScore: dimensionScores.incidents,
          administrationScore: dimensionScores.administration,
          traceabilityScore: dimensionScores.traceability,
          experienceScore: dimensionScores.experience,
          weakestDimension,
          currentSystem: currentSystem || null,
          wantsContact,
          website,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el diagnóstico.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ha ocurrido un error.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-accent p-6 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">Diagnóstico guardado</h2>
            <p className="mt-2 text-muted-foreground">
              Tu TimeOn Score ha quedado registrado.
              {wantsContact
                ? " Has pedido que revisemos el resultado contigo; lo hemos marcado para seguimiento."
                : " No iniciaremos contacto comercial a partir de esta solicitud."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold">¿Quieres guardar tu diagnóstico?</h2>
      <p className="mt-2 text-muted-foreground">
        Déjanos tus datos para asociar este resultado a tu empresa. El teléfono es opcional y puedes decidir si quieres que revisemos el resultado contigo.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Nombre
          <input
            required
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="Tu nombre"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Empresa
          <input
            required
            maxLength={200}
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="Nombre de la empresa"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            required
            type="email"
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="nombre@empresa.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Teléfono <span className="font-normal text-muted-foreground">(opcional)</span>
          <input
            type="tel"
            maxLength={40}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="+34 ..."
          />
        </label>
      </div>

      <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background p-4">
        <input
          type="checkbox"
          checked={wantsContact}
          onChange={(event) => setWantsContact(event.target.checked)}
          className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
        />
        <span>
          <span className="block font-semibold">Quiero que TimeOn revise este resultado conmigo</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            Si lo marcas, podremos contactarte para comentar las áreas detectadas y enseñarte cómo las abordaría TimeOn.
          </span>
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-destructive">{errorMessage}</p>
      )}

      <Button size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Guardar mi TimeOn Score
      </Button>

      <p className="mt-4 text-xs text-muted-foreground">
        Utilizaremos estos datos únicamente para gestionar tu diagnóstico y, si lo autorizas, contactar contigo sobre TimeOn.
      </p>
    </form>
  );
};

export default TimeOnScoreLeadForm;
