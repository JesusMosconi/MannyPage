"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const enlaces = [
  { texto: "Sobre mí", href: "#sobre-mi" },
  { texto: "Testimonios", href: "#testimonios" },
  { texto: "Planes", href: "#planes" },
];

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-fondo/85 backdrop-blur-xl">
    <div className="contenedor flex h-20 items-center justify-between">
      <a href="#inicio" className="font-titulos text-3xl tracking-wider text-primario">IRON COACH</a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
        {enlaces.map((enlace) => <a key={enlace.texto} className="text-sm font-bold text-texto-secundario hover:text-primario" href={enlace.href}>{enlace.texto}</a>)}
      </nav>
      <a href="#contacto" className="boton boton-primario hidden md:inline-flex">EMPEZAR AHORA</a>
      <button
        type="button"
        className="text-primario md:hidden"
        onClick={() => setAbierto((valorActual) => !valorActual)}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        aria-controls="menu-mobile"
      >
        {abierto ? <X /> : <Menu />}
      </button>
    </div>

    <div
      id="menu-mobile"
      className={`grid transition-all duration-300 ease-in-out md:hidden ${abierto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      aria-hidden={!abierto}
      inert={!abierto}
    >
      <div className="min-h-0 overflow-hidden">
        <nav className="border-t border-white/10 bg-fondo px-5 py-5" aria-label="Navegación mobile">
          {enlaces.map((enlace) => <a key={enlace.texto} onClick={() => setAbierto(false)} className="block border-b border-white/10 py-4 font-bold" href={enlace.href}>{enlace.texto}</a>)}
          <a onClick={() => setAbierto(false)} href="#contacto" className="boton boton-primario mt-5 w-full">EMPEZAR AHORA</a>
        </nav>
      </div>
    </div>
  </header>;
}
