import type { Theme } from "../types/types";
import { useEffect, useState } from "react";

export const ThemeData: Theme[] = ['Light', 'Dark'];

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'Dark' || saved === 'Light') {
      return saved as Theme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'Dark' : 'Light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('Dark', 'Light');
    root.classList.add(theme)
    localStorage.setItem('theme', theme);
    root.style.colorScheme = theme.toLowerCase();
  }, [theme]);
  const ToggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return{ToggleTheme, theme};
};