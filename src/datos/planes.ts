import type { Plan } from "@/tipos";
export const planes: Plan[] = [
 {id:"inicio",nombre:"INICIO",descripcion:"Para empezar a moverte con un plan claro.",precio:49,moneda:"USD",destacado:false,caracteristicas:[{texto:"Rutina personalizada",incluido:true},{texto:"Seguimiento mensual",incluido:true},{texto:"Guía nutricional",incluido:false},{texto:"Soporte por WhatsApp",incluido:false}]},
 {id:"transformacion",nombre:"TRANSFORMACIÓN",descripcion:"Acompañamiento completo para cambiar de verdad.",precio:89,moneda:"USD",destacado:true,caracteristicas:[{texto:"Rutina personalizada",incluido:true},{texto:"Seguimiento semanal",incluido:true},{texto:"Guía nutricional",incluido:true},{texto:"Soporte por WhatsApp",incluido:true}]},
 {id:"elite",nombre:"ÉLITE",descripcion:"Atención uno a uno y máximo rendimiento.",precio:149,moneda:"USD",destacado:false,caracteristicas:[{texto:"Todo lo de Transformación",incluido:true},{texto:"Videollamada semanal",incluido:true},{texto:"Ajustes ilimitados",incluido:true},{texto:"Prioridad 24/7",incluido:true}]}
];
