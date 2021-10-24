import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/FireBase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    
  };

  const handleSignIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 
   //   handle sign up using email and password
   const handleSignUp = async (email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password);
    
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setUser({
      ...user,
    });
  };

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    
  });
  return unsubscribe;
}, []);

//   handle log out function
const logOut = async () => {
  return signOut(auth);
};

  return {
    user,
    signInUsingGoogle,
    logOut,
    handleSignIn,
    handleSignUp
  };
};

export default useFirebase;
