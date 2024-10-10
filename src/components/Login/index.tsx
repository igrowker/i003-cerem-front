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
import { loginSchema } from "@/validators/login.schema";
import { PasswordInput } from "../ui/password-input";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { loginSuccess } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import LoadingAnimation from "../Loading";

export default function LoginComponent() {
  const { t } = useTranslation();
  const schemaLogin = loginSchema(t);
  const form = useForm<z.infer<typeof schemaLogin>>({
    resolver: zodResolver(schemaLogin),
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // @ts-ignore
  const [error, setError] = useState<string | null>(null);
  // @ts-ignore
  const [isPending, startTransition] = useTransition();
  async function onSubmit(values: z.infer<typeof schemaLogin>) {
    setError(null);
    setIsLoading(true);
    console.log("Login attempted with:", values);

    try {
      const response = await axios.post(
        `https://i003-cerem-back.onrender.com/api/token/`,
        {
          email: values.email,
          password: values.password,
        }
      );
      const { access: token } = response.data;
      if (token) {
        localStorage.setItem("authToken", token);
        dispatch(loginSuccess({ token }));
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Credenciales Incorrectas");
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false); // Desactivamos el estado de carga al finalizar
    }
  }

  return (
    <div className="mt-20 flex items-center justify-center">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingAnimation /> 
        </div>
      ) : (
        <>
          <div className="bg-[#F7FAFC] p-8 rounded-lg shadow-xl w-96">
            <div className="flex justify-center mb-6">
              <img src="/assets/isotipo_b.svg" alt="" className="w-20 h-20" />
            </div>
            <h2 className="text-2xl font-bold text-center text-[#08121F] mb-6">
              Iniciar sesión
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                      <FormLabel className="text-black">Contraseña</FormLabel>
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
                    {isPending ? "Iniciando..." : "Iniciar sesión"}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-4 text-center">
              <Link to="#" className="text-[#0097B2] hover:text-[#5CE1E6]">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
