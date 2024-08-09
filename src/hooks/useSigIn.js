import { useState } from "react";

import { auth } from "../firebase/firebaseConfige";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import toast from "react-hot-toast";

export const useSigIn = () => {

  const dispatch = useDispatch();
  const signIn = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log(user);
    dispatch(login(user));
    toast.success("Welcome," + user.displayName);
    try {
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { signIn };
};
