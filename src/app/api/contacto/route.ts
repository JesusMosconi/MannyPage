import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactoPayload } from "@/tipos";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escaparHtml(valor: string): string {
  const entidades: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return valor.replace(/[&<>"']/g, (caracter) => entidades[caracter]);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactoPayload>;
    const nombre = body.nombre?.trim();
    const email = body.email?.trim();
    const mensaje = body.mensaje?.trim();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ ok: false, mensaje: "Nombre, email y mensaje son obligatorios." }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, mensaje: "Ingresá un email válido." }, { status: 400 });
    }

    const emailDestino = process.env.EMAIL_DESTINO;
    if (!process.env.RESEND_API_KEY || !emailDestino) throw new Error("Faltan variables de entorno para Resend.");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const nombreSeguro = escaparHtml(nombre);
    const emailSeguro = escaparHtml(email);
    const mensajeSeguro = escaparHtml(mensaje).replace(/\n/g, "<br />");
    const { error } = await resend.emails.send({
      // Remitente de prueba de Resend. Cuando el profesor tenga dominio propio, hay que
      // verificarlo en Resend y cambiar este remitente, por ejemplo, a contacto@ironcoach.com.
      from: "Iron Coach <onboarding@resend.dev>",
      to: emailDestino,
      replyTo: email,
      subject: `Nueva consulta desde la web — ${nombre}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222"><h1 style="color:#f97316">Nueva consulta desde Iron Coach</h1><p><strong>Nombre:</strong> ${nombreSeguro}</p><p><strong>Email:</strong> ${emailSeguro}</p><div style="margin-top:24px"><strong>Mensaje:</strong><p style="line-height:1.6;background:#f5f5f5;padding:16px;border-radius:8px">${mensajeSeguro}</p></div></div>`,
    });
    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el formulario de contacto:", error);
    return NextResponse.json({ ok: false, mensaje: "No pudimos enviar tu consulta. Intentá nuevamente." }, { status: 500 });
  }
}
