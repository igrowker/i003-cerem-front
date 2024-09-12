import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Nombre es requerido',
    }),
    email: z.string({
        required_error: 'Email es requerido',
    }),
    password: z.string({
        required_error: 'Contraseña es requerida',
    }),
    confirmPassword: z.string({
        required_error: 'Confirmar contraseña es requerida',
    }),
});
