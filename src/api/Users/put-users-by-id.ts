import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const putUsers = async (id: number, user: User) => {
    try {
        const { data } = await axiosInstance.put<User>(`/usuarios/${id}/`, user);
        return data;
    } catch (error) {
        return error;
    }
}
