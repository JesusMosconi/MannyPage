import type { Plan } from "@/tipos";

export const planes: Plan[] = [
  {
    id: "reto-21-dias",
    nombre: "RETO 21 DÍAS",
    subtitulo: "Entrenamiento grupal guiado",
    descripcion: "Creá el hábito de entrenar por solo",
    precio: 30000,
    moneda: "ARS",
    caracteristicas: [],
    destacado: false,
    permiteGuiaAvanzada: true,
  },
  {
    id: "plan-inicial",
    nombre: "PLAN INICIAL",
    descripcion: "1 MES",
    precio: 65000,
    moneda: "ARS",
    mostrarMoneda: true,
    caracteristicas: [
      { texto: "Rutina 100% personalizada 1-1 conmigo", incluido: true },
      { texto: "Videos explicativos", incluido: true },
      { texto: "Guía nutricional básica", incluido: true },
      { texto: "Seguimiento por WhatsApp", incluido: true },
    ],
    destacado: false,
  },
  {
    id: "plan-macrociclo",
    nombre: "PLAN MACROCICLO",
    descripcion: "12 SEMANAS",
    precio: 55000,
    precioSufijo: "/mes",
    total: 165000,
    precioAnterior: 195000,
    moneda: "ARS",
    caracteristicas: [
      { texto: "Rutina 100% personalizada 1-1 conmigo por macrociclo", incluido: true },
      { texto: "Videos + corrección técnica", incluido: true },
      { texto: "Guía nutricional completa", incluido: true },
      { texto: "Seguimiento premium", incluido: true },
    ],
    destacado: true,
  },
];
