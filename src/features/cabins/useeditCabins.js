import { useMutation,useQueryClient} from "@tanstack/react-query";

import toast from "react-hot-toast";

export function useEditCabin(){
const queryClient = useQueryClient();
const { isLoading: isUpdating, mutate: editCabin } = useMutation({
mutationFn: ({ newEditData, id }) => createEditCabin(newEditData, id),
onSuccess: () => {
toast.success("Cabin updated successfully");
queryClient.invalidateQueries({
  queryKey: ["cabins"],
});
},
      });
return {isUpdating, editCabin};    
}