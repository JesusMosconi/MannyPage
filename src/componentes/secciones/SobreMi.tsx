import Image from "next/image";
import { Apple, BadgeCheck, Dumbbell } from "lucide-react";
import { profesor } from "@/datos/profesor";

const iconos = [BadgeCheck, Apple, Dumbbell];

export function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-superficie-clara py-24 text-texto-sobre-claro md:py-30">
      <div className="contenedor grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative min-h-130 overflow-hidden rounded-tarjeta">
          <Image
            src="/imagenes/sobre-mi-entrenador.png"
            alt={`${profesor.nombre}, entrenador personal`}
            fill
            className="object-cover grayscale transition duration-700 hover:grayscale-0"
            sizes="(min-width:768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="mb-4 text-sm font-bold tracking-[.25em] text-primario">CONOCÉ A TU ENTRENADOR</p>
          <h2 className="titulo inline-block border-b-8 border-primario pb-2">SOBRE MÍ</h2>
          <p className="my-8 whitespace-pre-line text-lg leading-relaxed text-black/70">{profesor.bio}</p>
          <ul className="space-y-5">
            {profesor.certificaciones.map((certificacion, indice) => {
              const Icono = iconos[indice];
              return (
                <li key={certificacion} className="flex items-center gap-4 font-bold">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primario text-primario-oscuro">
                    <Icono />
                  </span>
                  {certificacion}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
