import { z } from 'zod';

export const clientSchema = (t: (key: string) => string) =>
    z.object({
        nombre: z.string({
            required_error: t('nombreRequerido'),
        }),
        email: z.string({
            required_error: t('emailRequerido'),
        }).email(t('emailInvalido')),
        usuario: z.string({
            required_error: t('usuarioRequerido'),
        }),
        telefono: z.string({
            required_error: t('telefonoRequerido'),
        }),
    });
