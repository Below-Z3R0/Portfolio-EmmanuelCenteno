import type { Theme } from '../components/types';
import { useEffect, useState } from "react";

export const ThemeData: Theme[] = ['light', 'dark'];

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved as Theme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme)
    localStorage.setItem('theme', theme);
    root.style.colorScheme = theme.toLowerCase();
  }, [theme]);
  const ToggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return{ToggleTheme, theme};
};