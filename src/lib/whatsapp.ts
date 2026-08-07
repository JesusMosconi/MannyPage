const NUMERO_WHATSAPP = "5493517302074";
const MENSAJE_WHATSAPP = "Hola Fer! Quiero info sobre tus planes de entrenamiento 💪";

export function generarLinkWhatsApp(mensaje: string = MENSAJE_WHATSAPP): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
