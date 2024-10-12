import axiosInstance from "@/services/axiosConfig";
import { Tasks } from "@/types/Tasks/Tasks";

export const getAllTasks = async (): Promise<Tasks[]> => {
    const { data } = await axiosInstance.get<Tasks[]>(`/tareas/`);
    console.log(data, "data");
    return data;
}
