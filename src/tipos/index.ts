export interface Testimonio { id: string; nombre: string; foto: string; calificacion: number; comentario: string }
export interface Plan { id: string; nombre: string; descripcion: string; precio: number; moneda: string; caracteristicas: { texto: string; incluido: boolean }[]; destacado: boolean }
export interface Profesor { nombre: string; bio: string; certificaciones: string[] }
export interface ContactoPayload { nombre: string; email: string; mensaje: string }
