"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    testimonialBg: "#fd8e8e",
    heroOverlay: "rgba(253, 142, 142, 0.3)",
    burgerCircle: "#fd8e8e",
  },
  dark: {
    testimonialBg: "#fde58e",
    heroOverlay: "rgba(253, 229, 142, 0.3)",
    burgerCircle: "#fde58e",
  },
  blue: {
    testimonialBg: "#8efdb0",
    heroOverlay: "rgba(142, 253, 176, 0.3)",
    burgerCircle: "#8efdb0",
  },
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const changeTheme = (name) => {
    setThemeName(name);
  }

  const currentTheme = themes[themeName];

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   const savedTheme = localStorage.getItem("theme");

  //   const appliedTheme = savedTheme || "system";
  //   setTheme(appliedTheme);

  //   const prefersDark = window.matchMedia(
  //     "(prefers-color-scheme:dark)"
  //   ).matches;
  //   root.classList.remove("light", "dark");

  //   if (appliedTheme === "dark" || (appliedTheme === "system" && prefersDark)) {
  //     root.classList.add("dark");
  //   } else {
  //     root.classList.add("light");
  //   }
  // }, [theme]);

  

  return (
    <ThemeContext.Provider value={{ theme: themeName, changeTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => {
  return  useContext(ThemeContext);
}
