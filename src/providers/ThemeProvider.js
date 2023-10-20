// ThemeProvider.tsx
"use client";
import { useState } from "react";
import { createContext, useContext } from "react";
const ICON_SUN = "sun";
const ICON_MOON = "moon";
const LIGHT = 'light';
const DARK = 'dark';
const ThemeContext = createContext({
    theme: DARK | LIGHT,
    icon: ICON_SUN,
    toggleTheme: (typeTheme) => { }
});
export const useTheme = () => {
    return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(LIGHT);
    const [icon, setIcon] = useState(ICON_SUN);
    const toggleTheme = (typeTheme) => {
        const validTheme = typeTheme === LIGHT || typeTheme === DARK ? typeTheme : LIGHT;
        const validIcon = validTheme == LIGHT ? ICON_SUN : ICON_MOON;
        setTheme(validTheme);
        setIcon(validIcon);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                icon,
                toggleTheme,
            }}>
            {children}
        </ThemeContext.Provider>);
}
