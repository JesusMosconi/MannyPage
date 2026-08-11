import Image from "next/image";
import { Mail } from "lucide-react";
import { IconoWhatsapp } from "@/componentes/ui/IconoWhatsapp";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

const LINK_MAIL =
  "mailto:fb.entrenamientospersonal@gmail.com?subject=Quiero%20info%20sobre%20mis%20planes&body=Hola%20Fer!%20Quiero%20info%20sobre%20tus%20planes%20de%20entrenamiento";

export function Contacto() {
  return (
    <section id="contacto" className="border-t border-superficie-alta/50 bg-superficie py-24 md:py-30">
      <div className="contenedor grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[.25em] text-primario">
            ¿LISTO PARA EMPEZAR?
          </p>
          <h2 className="titulo">
            HABLEMOS DE <span className="text-primario-claro">TU OBJETIVO</span>
          </h2>
          <p className="my-7 max-w-lg text-lg text-texto-secundario">
            Contame dónde estás y dónde querés llegar. Te respondo personalmente para encontrar el plan indicado.
          </p>

          <div className="flex max-w-md flex-col gap-4">
            <a
              className="boton w-full bg-whatsapp text-white hover:scale-[1.02]"
              style={{ borderColor: "var(--color-whatsapp)" }}
              href={generarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsapp />
              ESCRIBIME POR WHATSAPP
            </a>
            <a
              className="boton w-full bg-transparent text-texto hover:bg-superficie-alta"
              style={{ borderColor: "var(--color-superficie-alta-2)" }}
              href={LINK_MAIL}
            >
              <Mail className="size-6" aria-hidden="true" />
              ESCRIBIME POR MAIL
            </a>
          </div>
        </div>

        <div className="relative h-100 overflow-hidden rounded-tarjeta md:h-150">
          <Image
            src="/imagenes/entrenador-contacto.jpg"
            alt="Entrenador personal en el gimnasio"
            fill
            className="object-cover"
            sizes="(min-width:768px) 50vw, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-superficie via-superficie/25 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
