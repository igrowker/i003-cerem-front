import axiosInstance from "@/services/axiosConfig";
import { User } from "@/types/Users/User";

export const createUsers = async (users: User) => {
    try {
        const { data } = await axiosInstance.post<User>(`/usuarios/`, users);
        return data;
    } catch (error) {
        return error;
    }
}
