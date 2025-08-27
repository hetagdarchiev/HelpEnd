import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme.jsx";
import BurgerBtn from "../../components/BurgerBtn/BurgerBtn.jsx";
import style from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const hundleOpen = (param) => {
    setIsOpen(param);
  };
  return (
    <header className={`${style.header || ""} container`}>
      <Logo />
      <div
        className={`${style["header__sub-container"] || ""} ${
          isOpen ? style["header__sub-container--opened"] : ""
        }`}
      >
        <Navbar onClick={hundleOpen} />
        <ToggleTheme />
      </div>
      <BurgerBtn onClick={hundleOpen} isOpen={isOpen} />
    </header>
  );
}
