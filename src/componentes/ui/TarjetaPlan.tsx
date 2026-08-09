"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { Plan } from "@/tipos";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

const formatearPrecio = (precio: number) =>
  new Intl.NumberFormat("es-AR").format(precio);

export function TarjetaPlan({ plan }: { plan: Plan }) {
  const [agregarGuia, setAgregarGuia] = useState(false);
  const mensaje = plan.permiteGuiaAvanzada && agregarGuia
    ? `Hola Fer! Quiero info sobre el plan ${plan.nombre} 💪 y también quiero sumar la guía nutricional avanzada (+$9.900)`
    : `Hola Fer! Quiero info sobre el plan ${plan.nombre} 💪`;

  return (
    <article
      className={`relative flex h-full flex-col rounded-tarjeta border p-7 transition-all ${
        plan.destacado
          ? "border-primario bg-superficie-alta shadow-[0_0_24px_rgba(249,115,22,0.2)]"
          : "border-superficie-alta bg-superficie-baja hover:border-primario"
      }`}
    >
      {plan.destacado && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primario px-4 py-2 text-xs font-bold text-primario-oscuro">
          MÁS ELEGIDO
        </span>
      )}

      <h3 className={`font-titulos text-4xl ${plan.destacado ? "text-primario-claro" : "text-texto"}`}>
        {plan.nombre}
      </h3>
      {plan.subtitulo && (
        <p className="mt-1 text-sm font-bold uppercase text-primario-claro">{plan.subtitulo}</p>
      )}
      <p className="mt-2 min-h-6 text-sm text-texto-secundario">{plan.descripcion}</p>

      <div className="my-6">
        <div>
          <span className="font-titulos text-6xl leading-none text-primario-claro">
            ${formatearPrecio(plan.precio)}
          </span>
          {plan.precioSufijo && <span className="text-texto-secundario">{plan.precioSufijo}</span>}
          {plan.mostrarMoneda && <span className="ml-2 text-texto-secundario">{plan.moneda}</span>}
        </div>
        {plan.total && (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-bold">
            <span>TOTAL ${formatearPrecio(plan.total)}</span>
            {plan.precioAnterior && (
              <span className="text-texto-secundario line-through">
                ${formatearPrecio(plan.precioAnterior)}
              </span>
            )}
          </div>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.caracteristicas.length > 0 && (
          <>
          {plan.caracteristicas.map((caracteristica) => (
            <li
              key={caracteristica.texto}
              className={`flex gap-3 ${caracteristica.incluido ? "" : "text-texto/35"}`}
            >
              {caracteristica.incluido ? (
                <Check className="size-5 shrink-0 text-primario" aria-hidden="true" />
              ) : (
                <X className="size-5 shrink-0" aria-hidden="true" />
              )}
              <span>{caracteristica.texto}</span>
            </li>
          ))}
          </>
        )}
      </ul>

      {plan.permiteGuiaAvanzada && (
        <label className="mb-4 flex cursor-pointer items-start gap-3 rounded-tarjeta border border-superficie-alta p-4 transition-colors hover:bg-superficie-alta">
          <input
            type="checkbox"
            checked={agregarGuia}
            onChange={(event) => setAgregarGuia(event.target.checked)}
            className="mt-0.5 size-5 shrink-0 accent-primario"
          />
          <span className="text-sm text-texto-secundario">
            Sí, quiero agregar <strong className="text-primario-claro">GUÍA NUTRICIONAL AVANZADA</strong> por solo +$9.900 extra
          </span>
        </label>
      )}

      <a
        className={`boton w-full ${plan.destacado ? "boton-primario" : "boton-outline"}`}
        href={generarLinkWhatsApp(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
      >
        ELEGIR PLAN
      </a>
    </article>
  );
}
