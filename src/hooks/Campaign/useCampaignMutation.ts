import { createCampaign } from "@/api/Campain/create-campaign";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useCampaingMutation = () => {
  const queryClient = useQueryClient();

  const addCampaignMutation = useMutation({
    mutationFn: createCampaign,
    onSuccess: (campaign, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['campaign'] });
      console.log("campaign created", campaign, variables, context);
    },

    onError: (error: any, variables, context) => {
      console.log("Error details:", error.response?.data || error.message, variables, context);
    },
  });


  return { addCampaignMutation };
};
