import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { clientSchema } from "@/validators/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useClientMutation } from "@/hooks/Client/useClientMutation";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateClientDialog({ isOpen, setIsOpen }: Props) {
  const { t } = useTranslation();
  const { addClientMutation } = useClientMutation();
  const schemaClient = clientSchema(t);
  const form = useForm<z.infer<typeof schemaClient>>({
    resolver: zodResolver(schemaClient),
  });

  async function onSubmit(values: z.infer<typeof schemaClient>) {
    try {
      const promise = addClientMutation.mutateAsync(values);
      toast.promise(promise, {
        loading: "Creando cliente...",
        success: "Cliente creado correctamente",
        error: "Error al crear el cliente",
      });
      console.log(values);
      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error("Error al crear el nuevo cliente", error);
    }
  }

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">{t("nuevoCliente")}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black capitalize">
                    {t("nombre")}
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">telefono</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="usuario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Usuario</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex items-center justify-between mt-2">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="capitalize"
              >
                {t("cancelar")}
              </Button>
              <Button
                type="submit"
                className=" bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 capitalize"
                variant="default"
              >
                {t("confirmar")}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
