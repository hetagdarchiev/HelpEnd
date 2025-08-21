import { useEffect, useRef, useState } from "react";
import style from "./AnimationCss.module.scss";

export default function AnimationCss() {
  const [iteration, setIteration] = useState("1");
  const [duration, setDuration] = useState(1);
  const [direction, setDirection] = useState("normal");
  const [delay, setDelay] = useState("0");
  const [name, setName] = useState("name");
  const [timing, setTiming] = useState("ease");
  const [fillMode, setFillMode] = useState("none");
  let cubeRef = useRef(null);

  useEffect(() => {
    const element = cubeRef.current;
    if (element) {
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = `
      cubeAnimate 
      ${duration}s 
      ${timing}
      ${direction}
      ${iteration} 
      ${delay}s
      ${fillMode}
    `;
    }
  }, [iteration, duration, direction, delay, timing, fillMode]);

  const animate = {
    animation: `cubeAnimate ${duration}s ${direction} ${iteration}`,
  };

  let userCode = [
    name ? `animation-name: ${name};` : "",
    iteration ? `animation-iteration-count: ${iteration}` : "",
    duration ? `animation-duration: ${duration}s;` : "",
    direction ? `animation-direction: ${direction};` : "",
    delay ? `animation-delay: ${delay}s;` : "",
    timing ? `animation-timing-function: ${timing};` : "",
    fillMode ? `animation-fill-mode: ${fillMode};` : "",
  ]
    .join("\n")
    .trim();

  return (
    <section className={`${style["animation"] || ""} container`}>
      <div className={`${style["animation-monitor__wrapper"] || ""}`}>
        <div className={`${style["animation-monitor"] || ""}`}>
          <div
            ref={cubeRef}
            className={`${style["animation-cube"] || ""}`}
            style={{
              ...animate,
              animation: userCode.replace(/\n/g, " "),
            }}
          ></div>
        </div>
        <pre className={`${style["animation-code"]}`} name="code-css">
          {userCode || "Youre code"}
        </pre>
      </div>

      <div className={`${style["animation-controller__wrapper"] || ""}`}>
        <div className={`${style["animation-name__wrapper"] || ""}`}>
          <h3>Name</h3>
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
        </div>

        <div className={`${style["animation-duration__wrapper"] || ""}`}>
          <h3>Duration</h3>
          <input
            type="number"
            name="animation-duration"
            id="animation-duration"
            placeholder="Enter the duration value"
            className={`animation-duration`}
            title="enter a number (number>0)"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value > 0 ? e.target.value : "");
            }}
          />
        </div>

        <div className={`${style["animtaion-direction__wrapper"] || ""}`}>
          <h3>Direction</h3>
          <div
            className={`${style["animation-direction__btn-group"] || ""} ${
              style["btn-group"]
            }`}
          >
            <button
              className={`${
                style["animation-controller--normal"] || ""
              } button`}
              onClick={() => setDirection("normal")}
              title="the default value, the animation plays from start to finish and then returns to the initial frame"
            >
              Normal
            </button>
            <button
              className={`${style["animation-controller--reverse"] || ""}
              button`}
              onClick={() => setDirection("reverse")}
              title="The animation is played in reverse order, from the last keyframe to the first, and then returns to the last frame."
            >
              Reverse
            </button>
            <button
              className={`${style["animation-controller--alternate"] || ""}
              button`}
              onClick={() => setDirection("alternate")}
              title="each odd repetition (first, third, fifth) of the animation is played in direct order, and each even repetition (second, fourth, sixth) of the animation is played in reverse order"
            >
              Alternate
            </button>
            <button
              className={`${
                style["animation-controller--alternate-reverse"] || ""
              }
              button`}
              onClick={() => setDirection("alternate-reverse")}
              title="Similarly to the alternate value, even and odd repeats are swapped."
            >
              Alternate Reverse
            </button>
          </div>
        </div>

        <div className={`${style["animation-iteration__wrapper"] || ""}`}>
          <h3>Iteration</h3>
          <input
            type="number"
            title="You can specify how many times the animation will be played."
            onChange={(e) => {
              setIteration(e.target.value > 0 ? e.target.value : "");
            }}
            value={iteration}
          />
          <button
            className={`${
              style["animation__controller--infinity"] || ""
            }button`}
            title="The animation will be repeated endlessly."
            onClick={() => setIteration("infinite")}
          >
            Infinity
          </button>
        </div>

        <div className={`${style["animation-delay__wrapper"] || ""}`}>
          <h3>Delay</h3>
          <input
            type="number"
            title="The property sets the animation playback delay. The value can be any number, both negative and positive.
If the value is positive, there will be a delay before the animation starts. If the value is negative, the animation will start off-screen."
            onChange={(e) => {
              setDelay(e.target.value);
            }}
            value={delay}
          />
        </div>

        <div className={`${style["animation-timing__wrapper"] || ""}`}>
          <h3>Animation Timing</h3>
          <div
            className={`${style["animation-timing__btn-group"] || ""} ${
              style["btn-group"] || ""
            }`}
          >
            <button
              className={`button`}
              onClick={() => setTiming("ease")}
              title="Standard smooth acceleration (default)"
            >
              ease
            </button>
            <button
              className={`button`}
              onClick={() => setTiming("ease-in")}
              title="Smooth animation start (slow beginning)"
            >
              ease-in
            </button>
            <button
              className={`button`}
              title="Smooth animation end (slow finish)"
              onClick={() => setTiming("ease-out")}
            >
              ease-out
            </button>
            <button
              className={`button`}
              onClick={() => setTiming("ease-in-out")}
              title="Smooth start and end of animation"
            >
              ease-in-out
            </button>
            <button
              className={`button`}
              onClick={() => setTiming("linear")}
              title="Constant speed without acceleration"
            >
              linear
            </button>
          </div>
        </div>

        <div className={`${style["animation-fill__wrapper"]}`}>
          <h3>Animation fill mode</h3>
          <div
            className={`${style["animation-fill__btn-group"] || ""} ${
              style["btn-group"] || ""
            }`}
          >
            <button className={`button`}
              title="animation styles are not applied before and after the animation is played (the default value)."
              onClick={() => setFillMode("none")}
            >
              none
            </button>
            <button className={`button`}
              onClick={() => setFillMode("forwards")}
              title="animation styles are not applied before and after the animation is played (the default value)."
            >
              forwards
            </button>
            <button className={`button`}
              onClick={() => setFillMode("backwards")}
              title="after the animation ends, the element will be styled with the styles of the first keyframe"
            >
              backwards
            </button>
            <button className={`button`}
              onClick={() => setFillMode("both")}
              title="the first keyframe is applied to the element before the animation begins, and the element remains in the state of the last keyframe after the animation ends."
            >
              both
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
