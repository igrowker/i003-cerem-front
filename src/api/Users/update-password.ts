import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const updatePassword = async (id: number, user: User) => {
    try {
        const { data } = await axiosInstance.put<User>(`/usuarios/${id}/update_password/`, user);
        return data;
    } catch (error) {
        return error;
    }
}
