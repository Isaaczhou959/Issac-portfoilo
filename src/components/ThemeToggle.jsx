import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "../lib/utils";
import NeonToggle from "./NeonToggle/NeonToggle";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // document.documentElement.classList.add("light");
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  console.log(isDarkMode);

  const toggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="fixed max-sm:hidden top-4 right-5 z-50">
      <NeonToggle darkMode={isDarkMode} toggle={toggle} />
    </div>

    // <button
    //   onClick={toggle}
    //   className={cn(
    //     "fixed max-sm:hidden top-4 right-5 z-50 p-2",
    //     "rounded-full transition-colors duration-300",
    //     "focus:outline-hidden"
    //   )}
    // >
    //   {isDarkMode ? (
    //     <Sun className="h-6 w-6 text-yellow-300" />
    //   ) : (
    //     <Moon className="h-6 w-6 text-blue-300" />
    //   )}
    // </button>
  );
};
