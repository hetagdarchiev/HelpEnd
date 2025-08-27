import { Link } from "react-router-dom";
import style from "./Tools.module.scss";
export default function FuncName() {
  return (
    <ul className={`${style["tools__list"]} container`}>
      <li>
        <Link className={`button`} to={"/borderRadius"}>
          Border Radius
        </Link>
      </li>
      <li>
        <Link className={`button`} to={"/pxToRem"}>
          Px to rem
        </Link>
      </li>
      <li>
        <Link className={`button`} to={"/animationCss"}>
          Animation Helper
        </Link>
      </li>
      <li>
        <Link className={`button`} to={"/shadowGenerator"}>
          Shadow Generator
        </Link>
      </li>
      <li>
        <Link className={`button`} to={"/cubicBezie"}>
          Cubic Bezie
        </Link>
      </li>
      <li>
        <Link className={`button`} to={"/gradientGenerator"}>
          Gradient Generator
        </Link>
      </li>
      <li>
        <Link className={`button`}></Link>
      </li>
    </ul>
  );
}
