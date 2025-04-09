import { createContext, useState, useEffect } from "react";

// actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // currentUser is the current user in the context
  const value = { currentUser, setCurrentUser }; // value is the value of the context
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>; // return the UserContext.Provider with the value
};
