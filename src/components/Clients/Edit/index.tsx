import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Client } from "@/types/Client/Client";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "@/validators/client.schema";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useClientMutation } from "@/hooks/Client/useClientMutation";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  client: Client;
}

export default function EditClientDialog({ isOpen, setIsOpen, client }: Props) {
  const { t } = useTranslation();
  const schemaClient = clientSchema(t);
  const { updateClientMutation } = useClientMutation();
  const form = useForm<z.infer<typeof schemaClient>>({
    resolver: zodResolver(schemaClient),
    defaultValues: client,
  });

  useEffect(() => {
    if (isOpen && client) {
      form.reset(client);
    }
  }, [client, isOpen]);

  async function onSubmit(values: z.infer<typeof schemaClient>) {
    try {
      console.log(values);
      form.reset();
      toast.promise(
        updateClientMutation.mutateAsync({
          id: Number(client.id),
          client: {
            ...values,
            usuario: client.usuario,
          },
        }),
        {
          loading: "Actualizando cliente...",
          success: "Cliente actualizado correctamente",
          error: "Error al actualizar el cliente",
        }
      );
      setIsOpen(false);
    } catch (error) {
      console.error("Error al editar el cliente", error);
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
          <DialogTitle className="capitalize">
            {t("editarClient")} - {client.nombre}
          </DialogTitle>
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
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black capitalize">
                    {t("telefono")}
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
                className=" bg-cyan-900 capitalize hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
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
