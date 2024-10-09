import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const getCampaignByStatistics = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<Campaign>(`/campanas/${id}/estadisticas/`);
        return data;
    } catch (error) {
        return error;
    }
}
