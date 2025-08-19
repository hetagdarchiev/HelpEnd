import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
export default function Navbar({ onClick }) {
  let hundleClose = () => {
    onClick(false);
  };
  return (
    <nav className={style["navbar"] || ""}>
      <ul className={style["navbar__list"] || ""}>
        <li className={style["navbar__item"] || ""}>
          <Link
            className={style["navbar__link"] || ""}
            to={"/home"}
            onClick={hundleClose}
          >
            Home
          </Link>
        </li>
        <li className={style["navbar__item"] || ""}>
          <Link
            className={style["navbar__link"] || ""}
            to={"/tools"}
            onClick={hundleClose}
          >
            Tools
          </Link>
        </li>
        <li className={style["navbar__item"] || ""}>
          <Link
            className={style["navbar__link"] || ""}
            to={"/documentation"}
            onClick={hundleClose}
          >
            Documentation
          </Link>
        </li>
        <li className={style["navbar__item"] || ""}>
          <Link
            className={style["navbar__link"] || ""}
            to={"/about"}
            onClick={hundleClose}
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
