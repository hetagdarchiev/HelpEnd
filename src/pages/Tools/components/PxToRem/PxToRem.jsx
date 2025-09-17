import { useEffect, useRef, useState } from "react";
import style from "./PxToRem.module.scss";
export default function PxToRem() {
  const [userValue, setUserValue] = useState();
  const [defaultValue, setDefaultValue] = useState(16);
  const [resultValue, setResultValue] = useState();
  const [borderColorSet, setBorderColorSet] = useState(false);
  const refBtn = useRef(null);
  async function CopyRight(obj) {
    obj = obj.current;

    if (!obj || !obj.value) {
      console.warn("Элемент не найден или не содержит текста для копирования");
      return;
    }
    try {
      await navigator.clipboard.writeText(`${obj.value}rem`);
      setBorderColorSet(true);
      setTimeout(() => {
        setBorderColorSet(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }
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
    <section className={`${style["pix-to-rem"] || ""}`}>
      <h1 className={`${style["pix-to-rem__title"] || ""}`}>Pixel to rem</h1>
      <form
        action=""
        className={`${style["pix-to-rem__form"] || ""} container`}
      >
        <div className={`${style["pix-to-rem__input-wrapper"] || ""}`}>
          <input
            className={`${style["pix-to-rem__input"] || ""}`}
            type="number"
            id={"px-to-rem__default-value"}
            value={defaultValue}
            onChange={handleChange(setDefaultValue)}
          />
          <label
            className={`${style["pix-to-rem__input-title"] || ""}`}
            htmlFor="px-to-rem__default-value"
          >
            Default value
          </label>
        </div>
        <div className={`${style["pix-to-rem__input-wrapper"] || ""}`}>
          <input
            className={`${style["pix-to-rem__input"] || ""}`}
            type="number"
            id="px-to-rem__enter-value"
            value={userValue}
            onChange={handleChange(setUserValue)}
          />
          <label
            className={`${style["pix-to-rem__input-title"] || ""}`}
            htmlFor="px-to-rem__enter-value"
          >
            Enter the value
          </label>
        </div>
        <div className={`${style["pix-to-rem__input-wrapper"] || ""}`}>
          <input
            className={`${style["pix-to-rem__input"] || ""}`}
            type="button"
            id="px-to-rem__fital-value"
            value={resultValue ? resultValue : ""}
            readOnly={true}
            tabIndex={-1}
            ref={refBtn}
            onClick={() => CopyRight(refBtn)}
            style={{
              borderColor: borderColorSet ? "green" : "var(--red-light)",
              cursor: "pointer"
            }}
          />
          <label
            className={`${style["pix-to-rem__input-title"] || ""}`}
            htmlFor="px-to-rem__result-value"
          >
            Result
          </label>
        </div>
      </form>
    </section>
  );
}
