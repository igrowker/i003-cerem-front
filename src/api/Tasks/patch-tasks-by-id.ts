import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const patchTasks = async (id: number) => {
    try {
        const { data } = await axiosInstance.patch<Tasks>(`/tareas/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}
