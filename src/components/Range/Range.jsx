import { useState } from "react";
import styl from "./Range.module.scss";
export default function Range({
  rangeValueFunc,
  className,
  maxValue = 100,
  minValue = 0,
  title = "range",
  stepValue = 1,
  defaultValue = 0
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    rangeValueFunc(newValue);
  };

  return (
    <>
      <input
        type="range"
        onChange={handleChange}
        value={value}
        min={minValue}
        title={title}
        max={maxValue}
        step={stepValue}
        className={`${className || ""} ${styl["range"]}`}
      />
    </>
  );
}
