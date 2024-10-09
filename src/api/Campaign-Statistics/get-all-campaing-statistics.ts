import axiosInstance from "@/services/axiosConfig";
import { CampaignStatistics } from "@/types/Campaign-Statistics/Campaign-Statistics";

export const getAllCampaingStatistics = async () => {
    try {
        const { data } = await axiosInstance.get<CampaignStatistics>(`/estadisticas-campanas/`);
        return data;
    } catch (error) {
        return error;
    }
}
