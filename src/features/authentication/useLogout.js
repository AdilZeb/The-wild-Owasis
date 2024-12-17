import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as AuthLogout } from "../../services/apiAuth";

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate= useNavigate();
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: AuthLogout,
        onSuccess:()=>{
            queryClient.removeQueries();
            navigate('/login',{replace:true});
        }
    })

    return {logout, isLoading}
}