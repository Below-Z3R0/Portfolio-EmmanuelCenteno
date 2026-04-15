import { useState, useEffect } from "react";
import type { Language } from "../types/types";

export function useLanguage() {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        if (saved === 'English' || saved === 'Spanish') {
            return saved as Language;
        }
        return 'Spanish'; 
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
        console.log(language)
    };

    return { toggleLanguage, language };
}