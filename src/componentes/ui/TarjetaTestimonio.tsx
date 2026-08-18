"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Quote, X } from "lucide-react";
import { obtenerIniciales } from "@/lib/texto";
import type { Testimonio } from "@/tipos";

export function TarjetaTestimonio({ testimonio }: { testimonio: Testimonio }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    if (!modalAbierto) return;
    const manejarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setModalAbierto(false);
    };
    window.addEventListener("keydown", manejarTecla);
    return () => window.removeEventListener("keydown", manejarTecla);
  }, [modalAbierto]);

  return (
    <>
      <article className="flex h-[560px] flex-col overflow-hidden rounded-tarjeta border border-superficie-alta bg-superficie-baja">
        {testimonio.resultado?.tipo === "foto" ||
        testimonio.resultado?.tipo === "antes-despues" ? (
          <button
            type="button"
            onClick={() => setModalAbierto(true)}
            className="h-48 w-full shrink-0 cursor-pointer bg-superficie-alta transition hover:opacity-90"
            aria-label={`Ver imagen completa de ${testimonio.nombre}`}
          >
            {testimonio.resultado.tipo === "foto" ? (
              <img
                src={testimonio.resultado.imagen}
                alt={`Resultado de ${testimonio.nombre}`}
                className={`h-full w-full object-cover ${testimonio.posicionImagen === "top" ? "object-top" : testimonio.posicionImagen === "bottom" ? "object-bottom" : "object-center"}`}
              />
            ) : (
              <div className="grid h-full grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={testimonio.resultado.antes}
                    alt={`Antes de ${testimonio.nombre}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    Antes
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={testimonio.resultado.despues}
                    alt={`Después de ${testimonio.nombre}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-2 bottom-2 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    Después
                  </span>
                </div>
              </div>
            )}
          </button>
        ) : (
          <div className="h-48 shrink-0 bg-superficie-alta">
            <div className="grid h-full place-items-center">
              <Quote className="size-8 text-primario opacity-40" />
            </div>
          </div>
        )}

        <div className="flex min-h-0 flex-1 flex-col p-6">
          <div className="flex shrink-0 items-center gap-3">
            {testimonio.foto ? (
              <img
                src={testimonio.foto}
                alt={testimonio.nombre}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primario font-bold text-primario-oscuro">
                {obtenerIniciales(testimonio.nombre)}
              </div>
            )}
            <div>
              <h3 className="font-bold text-texto">{testimonio.nombre}</h3>
              {testimonio.linkUsuario ? (
                <a
                  href={testimonio.linkUsuario}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primario-claro hover:underline"
                >
                  @{testimonio.usuario}
                </a>
              ) : (
                <p className="text-sm text-primario-claro">
                  @{testimonio.usuario}
                </p>
              )}
            </div>
          </div>
          <p className="mt-4 min-h-0 flex-1 overflow-y-auto pr-2 italic leading-relaxed text-texto-secundario [scrollbar-width:thin] [scrollbar-color:var(--color-primario)_transparent]">
            “{testimonio.comentario}”
          </p>
        </div>
      </article>

      {modalAbierto &&
        (testimonio.resultado?.tipo === "foto" ||
          testimonio.resultado?.tipo === "antes-despues") &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
            onClick={() => setModalAbierto(false)}
          >
            <button
              type="button"
              aria-label="Cerrar imagen ampliada"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-superficie-alta text-texto hover:bg-primario hover:text-primario-oscuro"
              onClick={() => setModalAbierto(false)}
            >
              <X className="size-6" />
            </button>

            {testimonio.resultado.tipo === "foto" ? (
              <img
                src={testimonio.resultado.imagen}
                alt={`Resultado de ${testimonio.nombre}`}
                className="max-h-[85vh] max-w-[90vw] rounded-tarjeta object-contain"
                onClick={(evento) => evento.stopPropagation()}
              />
            ) : (
              <div
                className="grid max-h-[85vh] max-w-[90vw] grid-cols-2 gap-3"
                onClick={(evento) => evento.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={testimonio.resultado.antes}
                    alt={`Antes de ${testimonio.nombre}`}
                    className="max-h-[85vh] rounded-tarjeta object-contain"
                  />
                  <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={testimonio.resultado.despues}
                    alt={`Después de ${testimonio.nombre}`}
                    className="max-h-[85vh] rounded-tarjeta object-contain"
                  />
                  <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    Después
                  </span>
                </div>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
