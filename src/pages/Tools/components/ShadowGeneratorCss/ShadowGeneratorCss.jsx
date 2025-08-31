import style from "./ShadowGeneratorCss.module.scss";
import Range from "../../../../components/Range/Range";
import { useRef, useState } from "react";
export default function ShadowGenerator() {
  const [horizontal, setHorizontal] = useState("15");
  const [vertical, setVertical] = useState("15");
  const [blur, setBlur] = useState("0");
  const [stretching, setStretching] = useState("0");
  const [shadowColor, setShadowColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("default");
  let codeRef = useRef(null);
  const handleHorizontalValue = (param) => {
    setHorizontal(param);
  };
  const handleVerticalValue = (param) => {
    setVertical(param);
  };
  const handleBlurlValue = (param) => {
    setBlur(param);
  };
  const handleStretchinglValue = (param) => {
    setStretching(param);
  };
  async function CopyRited(text, e) {
    const btn = e.currentTarget;
    try {
      let property = text.current;
      await navigator.clipboard.writeText(property.innerText);
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
  }
  const shadow = `${horizontal}px ${vertical}px ${blur}px ${stretching}px ${shadowColor}`;
  return (
    <section className={`${style["shadow-generator"] || " "} container`}>
      <div className={`${style["box__wrapper"] || ""}`}>
        <div
          style={{ boxShadow: shadow, backgroundColor: boxColor }}
          className={`${style["box"] || " "}`}
        ></div>
      </div>
      <div className={`${style["contol"] || ""}`}>
        <div className={`${style["shadow-generator__sub-container"] || ""}`}>
          <div>Horizontal displacement: {horizontal}px</div>
          <Range
            minValue={-200}
            maxValue={200}
            rangeValueFunc={handleHorizontalValue}
            className={`${style["range"] || ""}`}
          />
        </div>
        <div className={`${style["shadow-generator__sub-container"] || ""}`}>
          <div>Vertical displacement: {vertical}px</div>
          <Range
            minValue={-200}
            maxValue={200}
            rangeValueFunc={handleVerticalValue}
            className={`${style["range"] || ""}`}
          />
        </div>
        <div className={`${style["shadow-generator__sub-container"] || ""}`}>
          <div>Blur value: {blur}px</div>
          <Range
            minValue={0}
            maxValue={200}
            rangeValueFunc={handleBlurlValue}
            className={`${style["range"] || ""}`}
          />
        </div>
        <div className={`${style["shadow-generator__sub-container"] || ""}`}>
          <div>Stretching value: {stretching}px</div>
          <Range
            minValue={-200}
            maxValue={200}
            rangeValueFunc={handleStretchinglValue}
            className={`${style["range"] || ""}`}
          />
        </div>
        <div className={`${style["shadow-generator__sub-container"] || ""}`}>
          <div>Shadow color value: {shadowColor}</div>
          <input
            type="color"
            value={shadowColor}
            onChange={(e) => {
              setShadowColor(e.target.value);
            }}
          />
          <div>Box color value: {boxColor}</div>
          <input
            type="color"
            value={boxColor}
            onChange={(e) => {
              setBoxColor(e.target.value);
            }}
          />
        </div>
        <div className={`code__wrapper`}>
          <pre className="code__text" ref={codeRef}>
            <code>
              {`
  box-shadow: ${shadow};
  -webkit-box-shadow: ${shadow};
  -moz-box-shadow: ${shadow};
    `}
            </code>
          </pre>
          <button
            className={`${style["copy__btn"] || ""}`}
            onClick={(e) => CopyRited(codeRef, e)}
            type="button"
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  );
}
