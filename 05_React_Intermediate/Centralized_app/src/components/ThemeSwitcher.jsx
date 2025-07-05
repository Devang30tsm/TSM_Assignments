import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌓 Theme Switcher</h1>
      <p className="mb-4">
        Current Theme: <strong>{theme}</strong>
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
