import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const patchUsers = async (id: number, user: User) => {
    try {
        const { data } = await axiosInstance.patch<User>(`/usuariios/${id}`, user);
        return data;
    } catch (error) {
        return error;
    }
}
