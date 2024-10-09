import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const getClientById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<Client>(`/clientes/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
