import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"english" | "vietnamese">("english");

  // Load saved settings from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLanguage === "english" || savedLanguage === "vietnamese") setLanguage(savedLanguage);
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [theme, language]);

  const content = {
    light: {
      english: "Theme: Light  | Language: English 🇬🇧",
      vietnamese: "Giao diện: Sáng  | Ngôn ngữ: Tiếng Việt 🇻🇳",
    },
    dark: {
      english: "Theme: Dark  | Language: English 🇬🇧",
      vietnamese: "Giao diện: Tối  | Ngôn ngữ: Tiếng Việt 🇻🇳",
    },
  };

  return (
    <div className={`app-container ${theme}`}>
      <p>{content[theme][language]}</p>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginRight: "10px", padding: "10px 20px" }}
        aria-label="Toggle theme"
      >
        {language === "english" ? "Switch Theme" : "Đổi Giao Diện"}
      </button>

      <button
        onClick={() =>
          setLanguage(language === "english" ? "vietnamese" : "english")
        }
        style={{ padding: "10px 20px" }}
        aria-label="Toggle language"
      >
        {language === "english" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
      </button>
    </div>
  );
}

export default App;