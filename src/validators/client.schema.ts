import { z } from "zod";

export const clientSchema = z.object({
    name: z.string({
        required_error: 'Nombre es requerido',
    }),
    username: z.string({
        required_error: 'Usuario es requerido',
    }),
    email: z.string({
        required_error: 'Email es requerido',
    })
});