import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const getUserById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<User>(`/usuarios/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
