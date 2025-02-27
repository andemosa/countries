"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="h-5 w-5" />
          <span className="ml-2">Light Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-5 w-5" />
          <span className="ml-2">Dark Mode</span>
        </>
      )}
    </Button>
  );
}
