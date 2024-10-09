import axiosInstance from "@/services/axiosConfig";
import { CampaignStatistics } from "@/types/Campaign-Statistics/Campaign-Statistics";

export const getCampaingStatisticsById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<CampaignStatistics>(`/estadisticas-campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
