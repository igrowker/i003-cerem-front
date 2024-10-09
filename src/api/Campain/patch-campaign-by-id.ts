import axiosInstance from "@/services/axiosConfig";
import { Campaign } from "@/types/Campaign/Campaign";

export const patchCampaign = async (id: number) => {
    try {
        const { data } = await axiosInstance.patch<Campaign>(`/campanas/${id}/`);
        return data;
    } catch (error) {
        return error;
    }
}
