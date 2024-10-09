import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const createCampaign = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<Campaign>(`/estadisticas-campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
