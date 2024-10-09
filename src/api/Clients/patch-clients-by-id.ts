import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const patchClient = async (id: number, client: Client) => {
    try {
        const { data } = await axiosInstance.patch<Client>(`/clientes/${id}`, client);
        return data;
    } catch (error) {
        return error;
    }
}
