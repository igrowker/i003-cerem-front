export interface Campaign {
    id: number,
    fecha_creacion: string,
    fecha_inicio: string,
    usuario: string
    nombre: string,
    descripcion: string,
    clics_totales: number,
    conversiones_totales: number,
    google_calendar_event_id: string,
    google_keep_note_id: string,
    rendimiento: number,
}