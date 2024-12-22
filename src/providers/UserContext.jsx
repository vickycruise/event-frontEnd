import React, { createContext, useState, useContext } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserContextProvider Component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `null` if no user is logged in
  const [isAdmin, setIsAdmin] = useState(false); // Tracks if the user is an admin

  // Function to log in a user
  const login = (userData) => {
    setUser(userData);
    setIsAdmin(userData?.isAdmin || false);
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <UserContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
