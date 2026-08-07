import { Check, X } from "lucide-react";
import type { Plan } from "@/tipos";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

export function TarjetaPlan({ plan }: { plan: Plan }) {
  const mensaje = `Hola Fer! Quiero info sobre el plan ${plan.nombre} 💪`;
  return <article className={`relative flex flex-col rounded-tarjeta border p-7 ${plan.destacado ? "border-primario bg-superficie-alta md:-translate-y-5 md:scale-105" : "border-superficie-alta bg-superficie-baja"}`}>{plan.destacado && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primario px-4 py-2 text-xs font-bold text-primario-oscuro">MÁS ELEGIDO</span>}<h3 className="font-titulos text-4xl">{plan.nombre}</h3><p className="mt-2 min-h-12 text-sm text-texto-secundario">{plan.descripcion}</p><div className="my-6"><span className="font-titulos text-6xl text-primario-claro">{plan.moneda} {plan.precio}</span><span className="text-texto-secundario"> / mes</span></div><ul className="mb-8 flex-1 space-y-3">{plan.caracteristicas.map((caracteristica) => <li key={caracteristica.texto} className={`flex gap-3 ${caracteristica.incluido ? "" : "text-texto/35"}`}>{caracteristica.incluido ? <Check className="shrink-0 text-primario" /> : <X className="shrink-0" />}{caracteristica.texto}</li>)}</ul><a className={`boton ${plan.destacado ? "boton-primario" : "boton-outline"}`} href={generarLinkWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer">ELEGIR PLAN</a></article>;
}
