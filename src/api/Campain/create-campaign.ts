import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const createCampaign = async (campaing: Campaign) => {
    try {
        const { data } = await axiosInstance.post<Campaign>(`/campanas/`, campaing);
        return data;
    } catch (error) {
        return error;
    }
}
