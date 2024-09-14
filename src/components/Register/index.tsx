import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PasswordInput } from "../ui/password-input";
import { registerSchema } from "@/validators/register.schema";

export default function RegisterComponent() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log("Register attempted with:", values);
  }

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-[#F7FAFC] p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-center mb-6">
          <img src="src/assets/isotipo_b.svg" alt="" className="w-16 h-16" />
          {/* <img src="src/assets/logotipo_b.svg" alt="" className="w-16 h-16" /> */}
        </div>
        <h2 className="text-2xl font-bold text-center text-[#08121F] mb-6">
          Regístrate
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Confirmar Contraseña
                  </FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                className="w-full bg-[#0097B2] hover:bg-[#5CE1E6] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                variant="default"
                disabled={isPending}
              >
                {isPending ? "Registrando..." : "Registrarse"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
