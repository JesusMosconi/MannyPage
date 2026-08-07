import { MessageCircle } from "lucide-react";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

export function BotonFlotanteWhatsapp() {
  return <a href={generarLinkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="Hablar con Iron Coach por WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/40 hover:scale-110"><MessageCircle className="h-7 w-7" /></a>;
}
