import { useState, useEffect } from "react";
import { z } from 'zod'
import { ProjectsSectionSchema } from '../schema/schemasindex';

// Esto crea automáticamente el tipo "en" | "es" basado en tu Zod
type AvailableLanguages = keyof z.infer<typeof ProjectsSectionSchema>;

export function useLanguage() {
    const [language, setLanguage] = useState<AvailableLanguages>(() => {
        const saved = localStorage.getItem('language');
        if (saved === 'en' || saved === 'es') {
            return saved as AvailableLanguages;
        }
        return 'es';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = (newLanguage: AvailableLanguages) => {
        setLanguage(newLanguage);
    };

    return { toggleLanguage, language };
}