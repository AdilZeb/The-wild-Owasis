import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";
export function useUpdateSetting(){
    const queryClient= useQueryClient();
    const {mutate:Updatesetting, isLoading:isUpdating}= useMutation({
        mutationFn: updateSetting,

        onSuccess:()=> {
            toast.success("SucessFully Update Settings"),
            queryClient.invalidateQueries({
                queryKey:['settings']
            })
        
        },
        onError:(err)=> toast.error(err.message)
    })

    return {Updatesetting,isUpdating}
}