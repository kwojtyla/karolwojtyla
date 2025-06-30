"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isLightTheme = theme === "light";

  const handleThemeToggle = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <Button
      className="hover:bg-secondary bg-transparent text-gray-950 shadow-none transition-all duration-300 dark:text-gray-50"
      onClick={handleThemeToggle}
    >
      {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
}
