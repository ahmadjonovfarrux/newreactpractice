import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
import { useFireStore } from "./useFireStore";
import { doc, updateDoc } from "firebase/firestore";

export const useLogout = () => {
  const { dispatch, user } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const { updataDocument } = useFireStore("users");

  const logout = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        online: false,
      });
      setIsPending(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("See you soon");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { logout, isPending };
};
