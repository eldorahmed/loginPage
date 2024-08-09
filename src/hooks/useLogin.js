import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfige";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import toast from "react-hot-toast";

function useLogin() {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const registerWithGoogle = async () => {
    setIsPending(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(login(user));
      toast.success("Welcome," + user.displayName);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
      setIsPending(false);
    }
  };
  return { registerWithGoogle, isPending };
}

export { useLogin };
