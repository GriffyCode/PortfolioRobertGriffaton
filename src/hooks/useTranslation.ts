import { useCallback } from 'react';
import type {  Language, Translation  } from '../types';

export const useTranslation = (lang: Language) => {
  const t = useCallback((field: Translation | string | any) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    if (field[lang]) return field[lang];
    return field;
  }, [lang]);

  return { t };
};
