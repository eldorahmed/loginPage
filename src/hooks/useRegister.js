import { auth } from "../firebase/firebaseConfige";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import toast from "react-hot-toast";

function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = async (userInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      await updateProfile(auth.currentUser, {
        displayName: userInfo.displayName,
        photoURL: userInfo.photoURL,
      });
      const user = userCredential.user;
      console.log(user);
      dispatch(login(user));
      toast.success("Welcome," + user.displayName);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  return { registerWithEmailAndPassword };
}

export { useRegister };
