import React, { createContext, useContext, useState, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Set initial theme state

  // Apply dark mode class to html or body element on theme change
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
