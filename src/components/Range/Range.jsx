import { useState } from "react";
import styl from "./Range.module.scss";
export default function Range({
  rangeValueFunc,
  className,
  maxValue = 100,
  minValue = 0,
  title = "range",
  stepValue = 1,
  defaultValue = 0,
  val = false,
  id = "",
  style = "",
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
        value={val ? val : value}
        min={minValue}
        title={title}
        max={maxValue}
        step={stepValue}
        id={id}
        style={style || undefined}
        className={`${className || ""} ${styl["range"]}`}
      />
    </>
  );
}
