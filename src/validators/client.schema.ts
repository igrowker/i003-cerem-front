import { z } from 'zod';

export const clientSchema = (t: (key: string) => string) =>
    z.object({
        name: z.string({
            required_error: t('nombreRequerido'),
        }),
        username: z.string({
            required_error: t('usuarioRequerido'),
        }),
        email: z.string({
            required_error: t('emailRequerido'),
        }).email(t('emailInvalido')),
    });
