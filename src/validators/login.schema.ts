import { z } from 'zod';

export const loginSchema = (t: (key: string) => string) => 
  z.object({
    email: z.string({
      required_error: t('emailRequerido'),
    }),
    password: z.string({
      required_error: t('contrasenaRequerida'),
    }),
  });
