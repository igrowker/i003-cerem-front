import ClientsComponent from "@/components/Clients/Table";
import LoadingAnimation from "@/components/Loading";
import { useClients } from "@/hooks/Client/useClients";

const ClientsPage = () => {
  const { clients, isLoading } = useClients({ auth: true, fetchClients: true });

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="mx-auto container">
      <ClientsComponent clients={clients} />
    </div>
  );
};

export default ClientsPage;
