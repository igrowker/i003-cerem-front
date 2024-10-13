import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const getTasksById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<Tasks>(`/tareas/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}
