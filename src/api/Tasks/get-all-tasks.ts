import { Client } from "@/types/Client/Client";
import axios from "axios";

export const getAllClients = async (): Promise<Client[]> => {
    const { data } = await axios.get<Client[]>(`https://jsonplaceholder.typicode.com/users`);
    return data;
}
