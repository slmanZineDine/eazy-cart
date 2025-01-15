"use client";

// Third-Party =====> next-themes
import { useTheme } from "next-themes";
// Icons
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  // ################### NEXT-THEMES HOOKS ###################
  const { setTheme } = useTheme();

  return (
    <div className="cursor-pointer">
      <Sun className="dark:hidden" onClick={() => setTheme("dark")} />
      <Moon className="hidden dark:block" onClick={() => setTheme("light")} />
    </div>
  );
};

export default ThemeSwitcher;
