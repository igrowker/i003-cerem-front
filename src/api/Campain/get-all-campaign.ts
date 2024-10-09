import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const getAllCampaign = async () => {
    try {
        const { data } = await axiosInstance.get<Campaign>(`/campanas/`);
        return data;
    } catch (error) {
        return error;
    }
}
