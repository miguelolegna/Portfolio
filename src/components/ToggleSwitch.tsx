import { useEffect, useState } from "react";

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty("--bg-color", "#111");
      root.style.setProperty("--text-color", "#ddd");
      document.body.className = "dark-mode";
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#111");
      document.body.className = "light-mode";
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={!isDarkMode}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>

      <style>{`
        .toggle-switch {
          position: fixed;
          top: 80px;
          right: 20px;
          width: 100px;
          height: 50px;
          z-index: 9999;
          transform: scale(0.7);
          transform-origin: top right;
          --light: #d8dbe0;
          --dark: #28292c;
        }

        .switch-label {
          position: absolute;
          width: 100%;
          height: 50px;
          background-color: var(--dark);
          border-radius: 25px;
          cursor: pointer;
          border: 3px solid var(--dark);
        }

        .checkbox {
          display: none;
        }

        .slider {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 25px;
          transition: 0.4s ease-in-out;
        }

        .checkbox:checked ~ .slider {
          background-color: var(--light);
        }

        .slider::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 10px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--dark);
          box-shadow: inset 12px -4px 0px 0px var(--light);
          transition: 0.4s ease-in-out;
        }

        .checkbox:checked ~ .slider::before {
          transform: translateX(50px);
          background-color: var(--dark);
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export default ToggleSwitch;
