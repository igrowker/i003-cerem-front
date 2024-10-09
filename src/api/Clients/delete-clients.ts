import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const deleteClient = async (id: number) => {
    try {
        const { data } = await axiosInstance.delete<Client>(`/clientes/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
