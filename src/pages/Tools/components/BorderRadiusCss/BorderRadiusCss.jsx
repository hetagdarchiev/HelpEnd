import { useState } from "react";
import style from "./BorderRadiusCss.module.scss";
import Range from "../../../../components/Range/Range";
export default function BorderRadius() {
  const [radius, setRadius] = useState("15px");

  const handleValueRangePx = (param) => {
    const numericValue = Math.max(0, parseInt(param, 10));
    setRadius(`${numericValue}px`);
  };

  const handleValueRangeProcent = (param) => {
    const numericValue = Math.max(0, parseInt(param, 10));
    setRadius(`${numericValue}%`);
  };

  return (
    <section className={`${style["border-radius"] || ""} container`}>
      <input
        className={`${style["border-radius__value"] || ""}`}
        type="text"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
        value={radius}
        title="The string with the value"
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
