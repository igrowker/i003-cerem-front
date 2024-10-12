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
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "@/validators/client.schema";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Tasks } from "@/types/Tasks/Tasks";
import { useTasksMutation } from "@/hooks/Tasks/useTasksMutation";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: Tasks;
}

export default function EditTasksDialog({ isOpen, setIsOpen, tasks }: Props) {
  const { t } = useTranslation();
  const schemaClient = clientSchema(t);
  const { updateTasksMutation } = useTasksMutation();
  const form = useForm<z.infer<any>>({
    resolver: zodResolver(schemaClient),
    defaultValues: tasks,
  });

  useEffect(() => {
    if (isOpen && tasks) {
      form.reset(tasks);
    }
  }, [tasks, isOpen]);

  async function onSubmit(values: z.infer<any>) {
    try {
      console.log(values);
      form.reset();
      toast.promise(
        updateTasksMutation.mutateAsync({
          id: Number(tasks.id),
          tasks: values,
        }),
        {
          loading: "Actualizando tarea...",
          success: "Tarea actualizada correctamente",
          error: "Error al actualizar la tarea",
        }
      );
      setIsOpen(false);
    } catch (error) {
      console.error("Error al editar la tarea", error);
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
            {t("editarTarea")} - {tasks.descripcion}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black capitalize">
                    {t("descripcion")}
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
              name="fecha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black capitalize">
                    {t("fecha")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
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
