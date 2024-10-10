import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@/types/Client/Client";
import { Button } from "../../ui/button";
import DeleteClientDialog from "../Delete";

export const getColumns = (
  onEditClient: (client: Client) => void,
  t: (key: string) => string
): ColumnDef<Client>[] => {
  const columns: ColumnDef<Client>[] = [
    {
      accessorKey: "#",
      header: "#",
      cell: ({ row }) => {
        const index = row.index;
        return <div className="text-sm">{index + 1}</div>;
      },
    },
    {
      accessorKey: "nombre",
      header: t("nombre"),
      cell: ({ row }) => (
        <div className="flex flex-col ml-2">
          <p className="text-sm font-medium">{row.original.nombre}</p>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="flex items-center">
          <p className="text-sm font-medium">{row.original.email}</p>
        </div>
      ),
    },
    {
      accessorKey: "telefono",
      header: "Teléfono",
      cell: ({ row }) => (
        <div className="flex items-center">
          <p className="text-sm font-medium">{row.original.telefono}</p>
        </div>
      ),
    },
    {
      accessorKey: "usuario",
      header: "Usuario",
      cell: ({ row }) => (
        <div className="flex items-center">
          <p className="text-sm font-medium">{row.original.usuario}</p>
        </div>
      ),
    },
    {
      accessorKey: "",
      header: " ",
      cell: ({ row }) => (
        <div className="flex items-end justify-end gap-2">
          <Button
            onClick={() => onEditClient(row.original)}
            className="bg-gray-700 hover:bg-gray-600 capitalize"
          >
            {t("editar")}
          </Button>
          <DeleteClientDialog idClient={Number(row.original.id)} />
        </div>
      ),
    },
  ];

  return columns;
};
