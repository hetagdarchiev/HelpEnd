import { useEffect, useState } from "react";
import style from "./PxToRem.module.scss";
export default function PxToRem() {
  const [userValue, setUserValue] = useState();
  const [defaultValue, setDefaultValue] = useState(16);
  const [resultValue, setResultValue] = useState();
  const handleChange = (stateFunc) => (e) => {
    if (e.target.value > 100000) {
      alert(
        "This is a very large number, please select a smaller number(before 100.000)"
      );
    } else {
      stateFunc(e.target.value);
    }
  };

  useEffect(() => {
    let result = userValue / defaultValue;
    setResultValue(result);
  }, [defaultValue, userValue]);

  return (
    <section className={`${style["pix-to-rem"]}`}>
      <h1 className={`${style['pix-to-rem__title']}`}>Pixel to rem</h1>
      <form action="" className={`${style['pix-to-rem__form']} container`}>
        <div className={`${style["pix-to-rem__input-wrapper"]}`}>
          <input
            className={`${style["pix-to-rem__input"]}`}
            type="number"
            id={"px-to-rem__default-value"}
            value={defaultValue}
            onChange={handleChange(setDefaultValue)}
          />
          <label
            className={`${style["pix-to-rem__input-title"]}`}
            htmlFor="px-to-rem__default-value"
          >
            Default value
          </label>
        </div>
        <div className={`${style["pix-to-rem__input-wrapper"]}`}>
          <input
            className={`${style["pix-to-rem__input"]}`}
            type="number"
            id="px-to-rem__enter-value"
            value={userValue}
            onChange={handleChange(setUserValue)}
          />
          <label
            className={`${style["pix-to-rem__input-title"]}`}
            htmlFor="px-to-rem__enter-value"
          >
            Enter the value
          </label>
        </div>
        <div className={`${style["pix-to-rem__input-wrapper"]}`}>
          <input
            className={`${style["pix-to-rem__input"]}`}
            type="number"
            id="px-to-rem__fital-value"
            value={resultValue}
            readOnly={true}
            tabIndex={-1}
          />
          <label
            className={`${style["pix-to-rem__input-title"]}`}
            htmlFor="px-to-rem__result-value"
          >
            Result
          </label>
        </div>
      </form>
    </section>
  );
}
