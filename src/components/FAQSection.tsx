import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Mis empleados tienen que instalar algo?",
    answer:
      "No, absolutamente nada. Solo necesitan tener WhatsApp, que probablemente ya tienen instalado. No hay apps adicionales, no hay actualizaciones, no hay contraseñas nuevas que recordar.",
  },
  {
    question: "¿Es legal fichar por WhatsApp?",
    answer:
      "Sí. Lo importante es que el registro sea fiable, inalterable y accesible. TimeOn cumple con todos los requisitos de la normativa española de control horario, generando registros válidos legalmente.",
  },
  {
    question: "¿Sirve para empleados en movilidad?",
    answer:
      "¡Perfecto para eso! Ya sean comerciales, técnicos, repartidores o cualquier empleado que trabaje fuera de la oficina. Pueden fichar desde cualquier lugar con su móvil.",
  },
  {
    question: "¿Puedo exportar los datos?",
    answer:
      "Por supuesto. Puedes exportar todos los registros en formatos estándar (Excel, PDF) para entregar a tu asesoría o para tenerlos listos ante una inspección.",
  },
  {
    question: "¿Cuánto cuesta TimeOn?",
    answer:
      "Puedes empezar gratis y sin compromiso. Tenemos planes adaptados al tamaño de tu empresa, desde autónomos hasta PYMEs con decenas de empleados. Consulta nuestros precios o contacta con nosotros.",
  },
  {
    question: "¿Qué pasa si un empleado se olvida de fichar?",
    answer:
      "TimeOn puede enviar recordatorios automáticos. Además, como es tan fácil de usar (solo escribir un mensaje), la tasa de olvidos es mínima comparada con otras soluciones.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de empezar
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
