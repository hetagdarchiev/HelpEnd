import { Link } from "react-router-dom";
import style from "./Tools.module.scss";

export default function ToolsList() {
  return (
    <nav aria-label="CSS инструменты">
      <div className={`${style["tools__container"]} container`}>
        <fieldset >
          <legend>CSS </legend>
          <ul className={style["tools__list"]}>
            <li>
              <Link className={`button`} to={"/animationCss"}>
                Animation Helper
              </Link>
            </li>
            <li>
              <Link className={`button`} to={"/borderRadius"}>
                Border Radius
              </Link>
            </li>
            <li>
              <Link className={`button`} to={"/gradientGenerator"}>
                Gradient Generator
              </Link>
            </li>
            <li>
              <Link className={`button`} to={"/pxToRem"}>
                Px to Rem
              </Link>
            </li>
            <li>
              <Link className={`button`} to={"/shadowGenerator"}>
                Shadow Generator
              </Link>
            </li>
            <li>
              <Link className={`button`} to={"/flexGenerator"}>
                Flex
              </Link>
            </li>
            {/* <li>
              <Link className={`button`} to={"/cubicBezie"}>
                Cubic Bezier
              </Link>
            </li> */}
          </ul>
        </fieldset>
        <fieldset>
          <legend>Scss</legend>
          <ul className={`${style["tools__list"]}`}>
            <li>
              <Link to={"/funcScss"} className={`button`}>Functions</Link>
            </li>
          </ul>
        </fieldset>
      </div>
    </nav>
  );
}
