import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Simulated login function
  const login = (userData) => {
    // Add your authentication logic here
    setUser(userData);
    if (userData.role === "student") {
      navigate("/student");
    } else if (userData.role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/");
    }
  };

  // Simulated logout function
  const logout = () => {
    setUser(null);
    navigate("/"); // Redirect after logout
  };

  // Check if the user is authenticated
  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
