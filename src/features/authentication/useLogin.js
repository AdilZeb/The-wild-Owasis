import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
export function useLogin() {
  const navigate = useNavigate();
  const queryClient= useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
       queryClient.setQueryData(["user"], data.user);

      toast.success("Login Successfully");
      navigate("/dashboard");
    },
    onError: (err) => {
      console.error("Login error:", err);
      toast.error(err.message || "Credentials Not Valid");
    },
  });

  return { login, isLoading };
}