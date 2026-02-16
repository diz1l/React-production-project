import React from "react";

export enum Theme {
  LIGHT = "light-mode",
  DARK = "dark-mode",
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}


const ThemeContext = React.createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: () => {},
});

export default ThemeContext;

export const LOCAL_STORAGE_KEY = "app-theme";
