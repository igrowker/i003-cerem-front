import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const deleteCampaign = async (id: number) => {
    try {
        const { data } = await axiosInstance.delete<Campaign>(`/campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
