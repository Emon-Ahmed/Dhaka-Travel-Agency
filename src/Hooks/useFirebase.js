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
  const signInGoogle = (admin) => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      checkAdmin(admin);
      setLoading(false);
    });
  };

  const checkAdmin = (admin) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (admin) {
          setUser({ ...user, role: "admin" });
        } else {
          console.log('get');
          fetch(`https://agile-inlet-91085.herokuapp.com/admin/${user.email}`)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                setUser({ ...user, role: "admin" });
              } else if( result.error ){
                console.log('result2');
                setUser(user);
              }
            });
          // setUser(user);
        }
      } else {
        setUser({});
      }
      setLoading(false);
    });
  };

  // Using Hooks For Not Logout
  useEffect(() => {
    checkAdmin();
  }, []);
  // User Logout Function Call
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => setUser({}))
      .finally(() => setLoading(false));
  };
  return {
    setUser,
    loading,
    user,
    error,
    setError,
    logOut,
    signInGoogle,
  };
}
