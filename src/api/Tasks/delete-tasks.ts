import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const deleteTasks = async (id: number) => {
    try {
        const { data } = await axiosInstance.delete<Tasks>(`/tareas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
