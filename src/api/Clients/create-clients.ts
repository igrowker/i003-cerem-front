import axiosInstance from "@/services/axiosConfig";
import { Client } from "@/types/Client/Client";

export const createClient = async (client: Client) => {
    try {
        const { data } = await axiosInstance.post<Client>(`/clientes/`, client);
        return data;
    } catch (error) {
        return error;
    }
}
