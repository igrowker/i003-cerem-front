import { createClient } from "@/api/Clients/create-clients";
import { deleteClient } from "@/api/Clients/delete-clients";
import { putClient } from "@/api/Clients/put-clients-by-id";
import { Client } from "@/types/Client/Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useClientMutation = () => {
  const queryClient = useQueryClient();

  const addClientMutation = useMutation({
    mutationFn: createClient,
    onSuccess: (client, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      console.log("client created", client, variables, context);
    },

    onError: (error: any, variables, context) => {
      console.log("Error details:", error.response?.data || error.message, variables, context);
    },
  });

  const updateClientMutation = useMutation({
    mutationFn: ({ id, client }: { id: number; client: Client }) => putClient(id, client),
    onSuccess: (client, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      console.log("client updated", client, variables, context);
    },
    onError: (error, variables, context) => {
      console.log("Error updating client", error, variables, context);
    },
  });

  const deleteClientMutation = useMutation({
    mutationFn: (id: number) => deleteClient(id),
    onSuccess: (client, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['clients'] })
      console.log("client deleted", client, variables, context);
    },
    onError: (error, variables, context) => {
      console.log("Error deleting client", error, variables, context);
    },
  });

  return { addClientMutation, updateClientMutation, deleteClientMutation };
};
