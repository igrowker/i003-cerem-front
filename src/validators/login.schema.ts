import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email es requerido',
    }),
    password: z.string({
        required_error: 'Contraseña es requerida',
    }),
});
