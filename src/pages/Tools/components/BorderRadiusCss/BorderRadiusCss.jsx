import { useState } from "react";
import style from "./BorderRadiusCss.module.scss";
import Range from "../../../../components/Range/Range";
export default function BorderRadius() {
  const [radius, setRadius] = useState("15px");

  const handleValueRangePx = (param) => {
    const numericValue = Math.max(0, parseInt(param, 10));
    setRadius(`${numericValue}px`);
  };

  const CopyRight = async function (btn) {
    try {
      await navigator.clipboard.writeText(`border-radius: ${btn.value};`);
      btn.style.borderColor = "green";
      setTimeout(() => {
        btn.style.borderColor = "var(--red-light)";
      }, 1000);
    } catch (error) {
      console.log(error);
      btn.style.borderColor = "red";
      setTimeout(() => {
        btn.style.borderColor = "var(--red-light)";
      }, 1000);
    }
  };

  const handleValueRangeProcent = (param) => {
    const numericValue = Math.max(0, parseInt(param, 10));
    setRadius(`${numericValue}%`);
  };

  return (
    <section className={`${style["border-radius"] || ""} container`}>
      <input
        className={`${style["border-radius__value"] || ""}`}
        type="button"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
        value={radius}
        title="The string with the value"
        onClick={(e) => CopyRight(e.target)}
        style={{cursor: "pointer"}}
      />
      <Range
        maxValue={250}
        rangeValueFunc={handleValueRangePx}
        className={`border-radius__range`}
        defaultValue={15}
        title="px"
      />
      <Range
        maxValue={50}
        rangeValueFunc={handleValueRangeProcent}
        className={`border-radius__range`}
        defaultValue={15}
        title="%"
      />
      <div
        className={`${style["border-radius__box"] || ""}`}
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
