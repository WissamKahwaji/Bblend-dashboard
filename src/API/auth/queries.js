import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signIn } from ".";
const useSignInMutation = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (data) => signIn(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      window.location.replace("/controls/check_orders");
    },
    onError: () => {
      toast.error("failed to sign in please enter correct password");
    },
  });
};
export { useSignInMutation };
