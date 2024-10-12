import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useTasksMutation } from "@/hooks/Tasks/useTasksMutation";
import { Trash2 } from "lucide-react";

interface Props {
  id: number;
}

export default function DeleteTasksDialog({ id }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDialog = () => setIsOpen(!isOpen);
  const { deleteTasksMutation } = useTasksMutation();

  const handleConfirmDelete = async () => {
    try {
      const deletePromise = deleteTasksMutation.mutateAsync(id);
      toast.promise(deletePromise, {
        loading: "Eliminando...",
        success: "Tarea eliminado",
        error: "Error al eliminar la Tarea",
      });
    } catch (error) {
      console.error("Error al eliminar la Tarea", error);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" onClick={toggleDialog}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Eliminar Tarea</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          ¿Estás seguro de que quieres eliminar la tarea?
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={toggleDialog}>
            Cancelar
          </Button>
          <Button
            className="bg-cyan-800 hover:bg-cyan-700"
            onClick={handleConfirmDelete}
            disabled={deleteTasksMutation.isPending}
          >
            {deleteTasksMutation.isPending ? "Eliminando..." : "Eliminar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
