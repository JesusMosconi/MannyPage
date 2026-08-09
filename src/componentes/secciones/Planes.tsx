import { Check } from "lucide-react";
import { TarjetaPlan } from "@/componentes/ui/TarjetaPlan";
import { planes } from "@/datos/planes";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

const beneficiosPrueba = [
  "Rutinas adaptadas",
  "Videos explicativos",
  "Seguimiento de prueba",
];

const mensajePrueba =
  "Hola Fer! Quiero sumarme a los 7 días gratis de entrenamiento grupal guiado 💪";

export function Planes() {
  return (
    <section id="planes" className="bg-fondo pb-24 pt-24 md:pb-30 md:pt-32">
      <div className="contenedor">
        <div className="mb-16 text-center">
          <h2 className="titulo">
            PLANES DE <span className="text-primario-claro">ENTRENAMIENTO</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-texto-secundario">
            Elegí tu nivel de compromiso. Todos los planes requieren 100% de dedicación.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          <article className="relative grid items-center gap-8 rounded-tarjeta border border-superficie-alta bg-superficie-alta p-7 shadow-2xl md:grid-cols-3 md:p-9">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primario bg-superficie-alta px-4 py-1.5 text-xs font-bold text-primario-claro">
              EMPEZÁ SIN COMPROMISO
            </span>

            <div className="mt-3 text-center md:mt-0 md:text-left">
              <h3 className="font-titulos text-6xl leading-none text-primario-claro md:text-7xl">
                7 DÍAS GRATIS
              </h3>
              <p className="mt-3 font-titulos text-2xl leading-tight tracking-wide text-texto">
                ENTRENAMIENTO GRUPAL GUIADO
              </p>
              <p className="mt-2 text-texto-secundario">Probá mi metodología sin costo</p>
            </div>

            <ul className="space-y-4">
              {beneficiosPrueba.map((beneficio) => (
                <li key={beneficio} className="flex items-center gap-3">
                  <Check className="size-5 shrink-0 text-primario" aria-hidden="true" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>

            <div className="flex md:justify-end">
              <a
                className="boton boton-primario w-full md:w-auto"
                href={generarLinkWhatsApp(mensajePrueba)}
                target="_blank"
                rel="noopener noreferrer"
              >
                QUIERO MIS 7 DÍAS GRATIS
              </a>
            </div>
          </article>

          <div className="grid gap-7 md:grid-cols-3 md:items-stretch">
            {planes.map((plan) => (
              <TarjetaPlan key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
