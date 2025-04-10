import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase-utils";
// actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // currentUser is the current user in the context
  const value = { currentUser, setCurrentUser }; // value is the value of the context
  // on auth state changed listener
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>; // return the UserContext.Provider with the value
};
