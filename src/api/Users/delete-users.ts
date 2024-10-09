import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const deleteUsers = async (id: number) => {
    try {
        const { data } = await axiosInstance.delete<User>(`/usuarios/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
