import { z } from 'zod';

export const registerSchema = (t: (key: string) => string) => 
  z.object({
    name: z.string({
      required_error: t('nombreRequerido'),
    }),
    email: z.string({
      required_error: t('emailRequerido'),
    }),
    password: z.string({
      required_error: t('contrasenaRequerida'),
    }),
    confirmPassword: z.string({
      required_error: t('contrasenaConfirmacion'), 
    }),
  });
