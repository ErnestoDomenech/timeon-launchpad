import { Clock, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">TimeOn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Control horario legal desde WhatsApp. Sin apps. Sin formación. Sin excusas.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <div className="space-y-2">
              <a
                href="mailto:hola@timeon.es"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                hola@timeon.es
              </a>
              <a
                href="tel:+34900000000"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                900 000 000
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Términos y condiciones
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Aviso legal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TimeOn. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
