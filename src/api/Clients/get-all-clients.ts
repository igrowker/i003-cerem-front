import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const getAllClients = async (): Promise<Client[]> => {
    try {
        const { data } = await axiosInstance.get<Client[]>(`/clientes`);
        return data;
    } catch (error) {
        throw error;
    }
}
