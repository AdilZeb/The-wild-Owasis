import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";


export function useCreateCabins(){
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createnewCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      
    },
  });
   return {isCreating,createnewCabin}
}