import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@/types/Client/Client";

export const getColumns = (): ColumnDef<Client>[] => {
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
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) => (
        <div className="flex flex-col ml-2">
          <p className="text-sm font-medium">{row.original.name}</p>
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
  ];

  return columns;
};
