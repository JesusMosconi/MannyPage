import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { IconoTikTok } from "@/componentes/ui/IconoTikTok";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

const claseIcono = "h-6 w-6";
const claseEnlaceSocial = "text-texto transition-colors hover:text-primario";

export function PiePagina() {
  return <footer className="border-t border-white/10 bg-fondo py-12"><div className="contenedor text-center"><a href="#inicio" className="font-titulos text-4xl tracking-wider text-texto/20">FerBertero Coach</a><div className="my-7 flex flex-wrap justify-center gap-6 text-sm text-texto-secundario"><Link href="/politica-privacidad">Política de Privacidad</Link><Link href="/terminos-servicio">Términos de Servicio</Link><a href="#contacto">Contacto</a></div><div className="mb-7 flex justify-center gap-5"><a className={claseEnlaceSocial} aria-label="Instagram de FerBertero Coach" href="https://www.instagram.com/ferbertero.coach?igsh=eHA5aHY0bGdxa2gz" target="_blank" rel="noopener noreferrer"><Instagram className={claseIcono} /></a><a className={claseEnlaceSocial} aria-label="Facebook de FerBertero Coach" href="https://www.facebook.com/EmprenderentuFuturo?rdid=S1poxYnvDrKGtild&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Dkx8KsXR%2F" target="_blank" rel="noopener noreferrer"><Facebook className={claseIcono} /></a><a className={claseEnlaceSocial} aria-label="TikTok de FerBertero Coach" href="https://www.tiktok.com/@ferbertero.coach" target="_blank" rel="noopener noreferrer"><IconoTikTok className={claseIcono} /></a><a className={claseEnlaceSocial} aria-label="WhatsApp de FerBertero Coach" href={generarLinkWhatsApp()} target="_blank" rel="noopener noreferrer"><MessageCircle className={claseIcono} /></a></div><p className="text-sm text-texto/40">© {new Date().getFullYear()} FerBertero Coach. Todos los derechos reservados.</p><p className="mt-2 text-xs text-texto/30">Sitio desarrollado por{" "}<a href="https://github.com/JesusMosconi/Portfolio" target="_blank" rel="noopener noreferrer" className="text-texto/50 transition-colors hover:text-primario">MosconiLabs</a></p></div></footer>;
}
