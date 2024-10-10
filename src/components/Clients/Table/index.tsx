import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableComponent } from "../../Table";
import { getColumns } from "./columns";
import { useState } from "react";
import CreateClientDialog from "../Create";
import EditClientDialog from "../Edit";
import { useTranslation } from "react-i18next";
import { Burger } from "@/components/Sidebar/Burger";
import { Client } from "@/types/Client/Client";

export default function ClientsComponent({ clients }: { clients: Client[] }) {
  const { t } = useTranslation();
  const [isCreateClientDialogOpen, setIsCreateClientDialogOpen] =
    useState(false);
  const openCreateClientDialog = () => setIsCreateClientDialogOpen(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const customFilterFunction = (client: Client, query: string) =>
    client.nombre.toLowerCase().includes(query.toLowerCase());

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setIsEditDialogOpen(true);
  };

  const columns = getColumns(handleEditClient, t);

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("clientes")}
          </h1>
          <Burger />
        </div>

        <Card className="w-full  mx-auto shadow-lg">
          <CardHeader>
            {/* <CardTitle className="text-xl font-bold">
               Listado de Clientes
            </CardTitle> */}
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <TableComponent
                data={clients}
                columns={columns}
                onAddClick={openCreateClientDialog}
                showSearch={true}
                customFilter={customFilterFunction}
                searchPlaceholder={t("buscarCliente")}
                addLinkText={t("nuevoCliente")}
              />
            </div>
            <CreateClientDialog
              isOpen={isCreateClientDialogOpen}
              setIsOpen={setIsCreateClientDialogOpen}
            />
            {isEditDialogOpen && editingClient && (
              <EditClientDialog
                isOpen={isEditDialogOpen}
                setIsOpen={setIsEditDialogOpen}
                client={editingClient}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
