import { useState, useEffect } from "react";
import style from "./ToggleTheme.module.scss";
export default function ToggleTheme() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTheme(localStorage.getItem("theme"));
  }, [darkTheme]);

  function toggleBtn() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <button className={`${style["toggle-btn"] || ""}`} onClick={toggleBtn}>
      {theme === "dark" ? "🌚" : "🌝"}
    </button>
  );
}
