import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableComponent } from "../Table";
import { useClients } from "@/hooks/Client/useClients";
import { getColumns } from "./columns";

export default function ClientsComponent() {
  const { clients } = useClients({
    auth: true,
    fetchClients: true,
  });

  const columns = getColumns();

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Clientes</h1>
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
                showSearch={true}
                searchPlaceholder="Buscar clientes..."
                // addLinkPath="/clientes/nuevo"
                addLinkText="Nuevo Cliente"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
