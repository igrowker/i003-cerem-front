import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const putClient = async (id: number, client: Client) => {
    try {
        const { data } = await axiosInstance.put<Client>(`/clientes/${id}/`, client);
        return data;
    } catch (error) {
        return error;
    }
}
