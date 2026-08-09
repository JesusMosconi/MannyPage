export interface Plan {
  id: string;
  nombre: string;
  descripcion: string;
  subtitulo?: string;
  precio: number;
  moneda: string;
  precioSufijo?: string;
  mostrarMoneda?: boolean;
  total?: number;
  precioAnterior?: number;
  permiteGuiaAvanzada?: boolean;
  caracteristicas: { texto: string; incluido: boolean }[];
  destacado: boolean;
}

export interface Testimonio {
  id: string;
  nombre: string;
  foto: string;
  calificacion: number;
  comentario: string;
}

export interface Profesor {
  nombre: string;
  bio: string;
  certificaciones: string[];
}
