import { useRef } from "react";
import styl from "./CodePreview.module.scss";
export default function CodePreview({ children, title, description, style }) {
  const refCode = useRef(null);

  async function CopyRight(obj) {
    obj = obj.current;
    try {
      await navigator.clipboard.writeText(obj.innerText);
      obj.style.borderColor = "green";
      setTimeout(() => {
        obj.style.borderColor = "var(--red-light)";
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={`${styl["code__group"] || ""}`} style={style}>
      <h3 className={`${styl["title"] || ""}`}>{title}</h3>
      <pre
        onClick={() => CopyRight(refCode)}
        ref={refCode}
        className={`${styl["code"] || ""}`}
      >
        {children}
      </pre>
      {description && <div>{description}</div>}
    </div>
  );
}
