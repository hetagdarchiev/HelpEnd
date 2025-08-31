import { useState } from "react";
import Range from "../../../../components/Range/Range";
import styl from "./GradientGenerator.module.scss";
export default function Gradient() {
  const [direction, setDirection] = useState(50);
  const [leftColor, setLeftColor] = useState("#ffffff");
  const [leftProcentColor, setLeftProcentColor] = useState(0);
  const [rightColor, setRightColor] = useState("#000000");
  const [rightProcentColor, setRightProcentColor] = useState(100);
  const [radialGradient, setRadialGradient] = useState(false);
  let styleObject = {
    background: radialGradient
      ? `radial-gradient(circle at ${direction}% 50%, 
        ${leftColor} ${leftProcentColor}%, 
        ${rightColor} ${rightProcentColor}%)`
      : `linear-gradient(${direction}deg, 
        ${leftColor} ${leftProcentColor}%, 
        ${rightColor} ${rightProcentColor}%)`,
  };
  let handleDirection = (param) => {
    setDirection(param);
  };
  let handleLeftProcentColor = (param) => {
    setLeftProcentColor(param);
  };
  let handleRightProcentColor = (param) => {
    setRightProcentColor(param);
  };
  return (
    <section className={`${styl["gradient"]}`}>
      <div className={`${styl["gradient__monitor"]}`} style={styleObject}>
        {!radialGradient && (
          <svg
            width="800px"
            height="800px"
            style={{ transform: `rotate(${direction - 90}deg)` }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
              fill="#ffffffff"
            />
          </svg>
        )}
      </div>
      <label htmlFor="gradient__direction">{direction}deg</label>
      <Range
        maxValue={360}
        title="rotate"
        className={`${styl["gradient__direction"]}`}
        id="gradient__direction"
        rangeValueFunc={handleDirection}
        val={direction}
      />
      <div className={`${styl["gradient__colors"]}`}>
        <div>
          <Range
            rangeValueFunc={handleLeftProcentColor}
            val={leftProcentColor}
            title="Set the range for the first color"
          />

          <input
            type="color"
            onChange={(e) => {
              setLeftColor(e.target.value);
            }}
            value={leftColor}
            title="set first color"
          />
        </div>
        <div>
          <Range
            rangeValueFunc={handleRightProcentColor}
            val={rightProcentColor}
            title="Set the range for the last color"
          />
          <input
            type="color"
            onChange={(e) => {
              setRightColor(e.target.value);
            }}
            title="set last color"
            value={rightColor}
          />
        </div>
      </div>
      <div className={`${styl["gradient__type"]}`}>
        <button
          type="button"
          className={`button`}
          onClick={() => {
            setRadialGradient(true);
          }}
          title="set radial type "
        >
          Radial gradient
        </button>
        <button
          type="button"
          className={`button`}
          onClick={() => {
            setRadialGradient(false);
          }}
          title="set linear type"
        >
          Linear gradient
        </button>
      </div>
    </section>
  );
}
