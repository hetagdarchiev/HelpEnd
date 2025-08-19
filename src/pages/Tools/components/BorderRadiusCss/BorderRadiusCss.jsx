import { useState } from "react";
import style from "./BorderRadiusCss.module.scss";
export default function BorderRadius() {
  const [radius, setRadius] = useState('15px');

  return (
    <section className={`${style["border-radius"]|| ''} container`}>
      <input
        className={`${style["border-radius__value"]|| ''}`}
        type="text"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
        value={radius}
      />
      <div
        className={`${style["border-radius__box"]|| ''}`}
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "var(--text-color)",
          borderRadius: radius,
        }}
      ></div>
    </section>
  );
}
