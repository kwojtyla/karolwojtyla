// language-provider.tsx - Com loading state
import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

export type Language = "pt-br" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isChanging, setIsChanging] = useState(false);
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as Language;
      if (saved) return saved;

      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("lang="))
        ?.split("=")[1];

      return (cookieValue as Language) || "pt-br";
    }
    return "pt-br";
  });

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    setIsChanging(true);
    setLanguageState(lang);

    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }

    document.cookie = `lang=${lang}; path=/; SameSite=Lax; max-age=${60 * 60 * 24 * 365}`;

    // Pequeno delay para mostrar o loading
    setTimeout(() => {
      router.refresh();
      setIsChanging(false);
    }, 100);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isChanging }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
