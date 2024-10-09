import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const putCampaign = async (id: number) => {
    try {
        const { data } = await axiosInstance.put<Campaign>(`/campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
