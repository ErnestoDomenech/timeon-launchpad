import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Este año, hazlo fácil.
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Empieza el año con orden, tranquilidad y un sistema que tu equipo sí va a usar.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-6"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Empieza gratis con TimeOn
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
