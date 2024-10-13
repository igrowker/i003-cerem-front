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
import { useTranslation } from "react-i18next";
import { useClientMutation } from "@/hooks/Client/useClientMutation";
import { toast } from "sonner";

interface Props {
  idClient: number;
}

export default function DeleteClientDialog({ idClient }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { deleteClientMutation } = useClientMutation();
  const toggleDialog = () => setIsOpen(!isOpen);
  const { t } = useTranslation();
  const handleConfirmDelete = async () => {
    try {
        toast.promise(deleteClientMutation.mutateAsync(idClient), {
          loading: "Eliminando client...",
          success: "Client eliminado con éxito!",
          error: "Error al eliminar el Client",
        });
    } catch (error) {
      console.error("Error al eliminar el cliente", error);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="capitalize"
          onClick={toggleDialog}
        >
          {t("eliminar")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {t("eliminarClient")}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{t("eliminarClientMessage")}</DialogDescription>
        <DialogFooter>
          <Button
            variant="outline"
            className="capitalize"
            onClick={toggleDialog}
          >
            {t("cancelar")}
          </Button>
          <Button
            className="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 capitalize"
            onClick={handleConfirmDelete}
          >
            {t("confirmar")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
