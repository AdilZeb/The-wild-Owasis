import { useMutation} from "@tanstack/react-query";
import { signup as SignupAuth } from "../../services/apiAuth";
import toast from "react-hot-toast";



export function useSignup() {
 
    const {mutate: signup, isLoading}= useMutation({
        mutationFn: ({ email, password }) => SignupAuth({ email, password }),
        onSuccess: (data) => {
            
            toast.success("User Created Successfully");
        },
        onError: (err) => {
            console.error("Login error:", err);
            toast.error(err.message || "Credentials Not Valid");
        },
    })
    return { signup, isLoading };
}