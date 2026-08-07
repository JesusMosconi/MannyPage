"use client";

import { FormEvent, useState } from "react";
import { IconoWhatsapp } from "@/componentes/ui/IconoWhatsapp";
import { generarLinkWhatsApp } from "@/lib/whatsapp";
import type { ContactoPayload } from "@/tipos";

type EstadoEnvio = "idle" | "enviando" | "exito" | "error";
const FORMULARIO_INICIAL: ContactoPayload = { nombre: "", email: "", mensaje: "" };

export function Contacto() {
  const [formulario, setFormulario] = useState<ContactoPayload>(FORMULARIO_INICIAL);
  const [estado, setEstado] = useState<EstadoEnvio>("idle");
  const [mensajeError, setMensajeError] = useState("");

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setMensajeError("");
    if (!formulario.nombre.trim() || !formulario.email.trim() || !formulario.mensaje.trim()) {
      setEstado("error");
      setMensajeError("Completá todos los campos antes de enviar.");
      return;
    }

    setEstado("enviando");
    try {
      const respuesta = await fetch("/api/contacto", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formulario) });
      const resultado = (await respuesta.json()) as { ok: boolean; mensaje?: string };
      if (!respuesta.ok) throw new Error(resultado.mensaje);
      setEstado("exito");
      setFormulario(FORMULARIO_INICIAL);
    } catch (error) {
      setEstado("error");
      setMensajeError(error instanceof Error && error.message ? error.message : "No pudimos enviar tu consulta. Intentá nuevamente.");
    }
  }

  const campo = "w-full rounded-lg border border-superficie-alta-2 bg-fondo px-4 py-3 text-texto outline-none focus:border-primario";
  return <section id="contacto" className="bg-superficie py-24 md:py-30"><div className="contenedor grid gap-14 md:grid-cols-2 md:items-center"><div><p className="mb-4 text-sm font-bold tracking-[.25em] text-primario">¿LISTO PARA EMPEZAR?</p><h2 className="titulo">HABLEMOS DE <span className="text-primario-claro">TU OBJETIVO</span></h2><p className="my-7 max-w-lg text-lg text-texto-secundario">Contame dónde estás y dónde querés llegar. Te respondo personalmente para encontrar el plan indicado.</p><a className="boton bg-whatsapp text-white border-whatsapp hover:scale-[1.02]" href={generarLinkWhatsApp()} target="_blank" rel="noopener noreferrer"><IconoWhatsapp /> ESCRIBIME POR WHATSAPP</a></div><form onSubmit={enviar} className="rounded-tarjeta border border-superficie-alta bg-superficie-baja p-6 md:p-8"><label className="mb-5 block font-bold">Nombre<input required className={`${campo} mt-2`} value={formulario.nombre} onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })} /></label><label className="mb-5 block font-bold">Email<input required type="email" className={`${campo} mt-2`} value={formulario.email} onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} /></label><label className="mb-6 block font-bold">Mensaje<textarea required rows={5} className={`${campo} mt-2 resize-none`} value={formulario.mensaje} onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })} /></label><button className="boton boton-primario w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={estado === "enviando"}>{estado === "enviando" ? "ENVIANDO..." : "ENVIAR CONSULTA"}</button>{estado === "exito" && <p className="mt-4 text-center font-bold text-primario" role="status">¡Consulta enviada! Te responderemos a la brevedad.</p>}{estado === "error" && <p className="mt-4 text-center text-red-400" role="alert">{mensajeError}</p>}</form></div></section>;
}
