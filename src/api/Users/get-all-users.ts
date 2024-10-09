import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const getAllUsers = async () => {
    try {
        const { data } = await axiosInstance.get<User>(`/usuarios/`);
        return data;
    } catch (error) {
        return error;
    }
}
