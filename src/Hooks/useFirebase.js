import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuth();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // For Creating Account With Google
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };
  // Using Hooks For Not Logout
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);
  // User Logout Function Call
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => setUser({}))
      .finally(() => setLoading(false));
  };
  return {
    loading,
    user,
    error,
    setError,
    logOut,
    signInGoogle,
  };
}
