import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const getCampaignById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get<Campaign>(`/campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
