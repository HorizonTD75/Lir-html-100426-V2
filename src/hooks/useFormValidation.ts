import { useState, useCallback } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** French phone: 10 digits starting with 0, optionally with spaces/dots/dashes */
const FRENCH_PHONE_REGEX = /^0[1-9](\s?[0-9]{2}){4}$/;

export interface ValidationErrors {
  [key: string]: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateEmail = useCallback((value: string): string => {
    if (!value.trim()) return "";
    if (!EMAIL_REGEX.test(value.trim())) {
      return "Veuillez entrer une adresse e-mail valide (ex : nom@exemple.fr).";
    }
    return "";
  }, []);

  const validatePhone = useCallback((value: string): string => {
    if (!value.trim()) return "";
    // Normalize: remove spaces, dots, dashes, parentheses
    const cleaned = value.trim().replace(/[\s\-\.\(\)]/g, "");
    if (!FRENCH_PHONE_REGEX.test(value.trim().replace(/[\-\.\(\)]/g, "")) && !/^0[1-9]\d{8}$/.test(cleaned)) {
      return "Format attendu : 06 12 34 56 78 (10 chiffres commençant par 0).";
    }
    return "";
  }, []);

  const validateField = useCallback((field: string, value: string) => {
    let error = "";
    if (field === "email") error = validateEmail(value);
    if (field === "telephone") error = validatePhone(value);
    setErrors((prev) => {
      if (error) return { ...prev, [field]: error };
      const { [field]: _, ...rest } = prev;
      return rest;
    });
    return error;
  }, [validateEmail, validatePhone]);

  const clearFieldError = useCallback((field: string) => {
    setErrors((prev) => {
      const { [field]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const validateAll = useCallback((fields: { field: string; value: string }[]): boolean => {
    const newErrors: ValidationErrors = {};
    for (const { field, value } of fields) {
      let error = "";
      if (field === "email") error = validateEmail(value);
      if (field === "telephone") error = validatePhone(value);
      if (error) newErrors[field] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [validateEmail, validatePhone]);

  return { errors, validateField, clearFieldError, validateAll, setErrors };
}
