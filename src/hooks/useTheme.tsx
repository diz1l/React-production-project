import { useContext } from "react";
import ThemeContext, { LOCAL_STORAGE_KEY, Theme } from "../Theme/ThemeContext";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
