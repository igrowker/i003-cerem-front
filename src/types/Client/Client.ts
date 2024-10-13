export interface Client {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    usuario?: string,
    fecha_creacion?: string | Date;
}

