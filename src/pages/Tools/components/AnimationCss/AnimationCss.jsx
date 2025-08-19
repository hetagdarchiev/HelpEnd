import { useEffect, useRef, useState } from "react";
import style from "./AnimationCss.module.scss";
export default function AnimationCss() {
  const [iteration, setIteration] = useState("1");
  const [duration, setDuration] = useState(1);
  const [name, setName] = useState("name");
  let cubeRef = useRef(null);
  useEffect(() => {
    const element = cubeRef.current;
    if (element) {
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = `
      cubeAnimate 
      ${duration || 2}s 
      ease-in-out 
      alternate 
      ${iteration} 
      both
    `;
    }
  }, [iteration, duration, name]);

  const animate = {
    animation: `cubeAnimate ${duration}s  ${iteration}`,
  };

  let userCode = [
    `animation-name: ${name};`,
    `animation-iteration-count: ${iteration};`,
    `animation-duration: ${duration || "duration"};`,
  ].join("\n");

  return (
    <section className={`${style["animation"] || ""} container`}>
      <div className={`${style["animation-monitor__wrapper"] || ""}`}>
        <div className={`${style["animation-monitor"] || ""}`}>
          <div
            ref={cubeRef}
            className={`${style["animation-cube"] || ""}`}
            style={animate}
          ></div>
        </div>
        <pre className={`${style["animation-code"]}`} name="code-css">
          {userCode || "Youre code"}
        </pre>
      </div>

      <div className={`animation-controller-wrapper`}>
        <input
          type="text"
          placeholder={"Enter the animation name"}
          maxLength={50}
          title="maximum length is 50 characters"
          className={`animation-name`}
          name="animation-name"
          id="animation-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className={`${style["animation-duration__wrapper"] || ""}`}>
          <h3>Duration</h3>
          <input
            type="number"
            name="animation-duration"
            id="animation-duration"
            placeholder="Enter the duration value"
            className={`animation-duration`}
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          <div className={`${style["animation-duration__button-group"] || ""}`}>
            <button
              className={`${style["animation-controller--normal"] || ""}
            button`}
              title="the default value, the animation plays from start to finish and then returns to the initial frame"
            >
              Normal
            </button>
            <button
              className={`${style["animation-controller--reverse"] || ""}
            button`}
              title="The animation is played in reverse order, from the last keyframe to the first, and then returns to the last frame."
            >
              Reverse
            </button>
            <button
              className={`${style["animation-controller--alternate"] || ""}
            button`}
              title="each odd repetition (first, third, fifth) of the animation is played in direct order, and each even repetition (second, fourth, sixth) of the animation is played in reverse order"
            >
              Alternate
            </button>
            <button
              className={`${
                style["animation-controller--alternate-reverse"] || ""
              }
            button`}
              title="Similarly to the alternate value, even and odd repeats are swapped."
            >
              Alternate Reverse
            </button>
          </div>
        </div>

        <div className={`${style["animation-iteration__wrapper"]}`}>
          <h3>Iteration</h3>
          <input
            type="number"
            onChange={(e) => {
              setIteration(e.target.value);
            }}
            value={iteration}
          />
          <button
            className={`${
              style["animation__controller--infinity"] || ""
            }button`}
            title=""
            onClick={() => setIteration("infinite")}
          >
            Infinity
          </button>
        </div>
      </div>
    </section>
  );
}
