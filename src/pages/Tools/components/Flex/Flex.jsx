import { useState } from "react";
import styl from "./Flex.module.scss";
export default function Flex() {
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [flexGrow, setFlexGrow] = useState(0);
  const [flexShrink, setFlexShrink] = useState(1);
  const [flexBasis, setFlexBasis] = useState("auto");
  const [order, setOrder] = useState(0);
  const [flex, setFlex] = useState("0 1 auto");

  const styleObject = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
  };
  return (
    <section className={`${styl["flex"]} container`}>
      <div style={styleObject} className={`${styl["flex__monitor"]}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styl["flex__controller"]}`}>
        <div className={`${styl["flex__direction"]}`}>
          <h3>flex direction</h3>
          <div className={`${styl["flex__direction-wrapper"]}`}>
            <button onClick={() => setDirection("row")} className={`button`}>
              row
            </button>
            <button
              onClick={() => setDirection("row-reverse")}
              className={`button`}
            >
              row-reverse
            </button>
            <button onClick={() => setDirection("column")} className={`button`}>
              column
            </button>
            <button
              onClick={() => setDirection("column-reverse")}
              className={`button`}
            >
              column-reverse
            </button>
          </div>
        </div>

        <div className={`${styl["flex__wrap"]}`}>
          <h3>flex wrap</h3>
          <div className={`${styl["flex__wrap-wrapper"]}`}>
            <button onClick={() => setWrap("nowrap")} className={`button`}>
              nowrap
            </button>
            <button onClick={() => setWrap("wrap")} className={`button`}>
              wrap
            </button>
            <button
              onClick={() => setWrap("wrap-reverse")}
              className={`button`}
            >
              wrap-reverse
            </button>
          </div>
        </div>

        <div className={`${styl["flex__justify-content"]}`}>
          <h3>justify content</h3>
          <div className={`${styl["justify-content-wrapper"]}`}>
            <button
              onClick={() => setJustifyContent("flex-start")}
              className={`button`}
            >
              flex-start
            </button>
            <button
              onClick={() => setJustifyContent("flex-end")}
              className={`button`}
            >
              flex-end
            </button>
            <button
              onClick={() => setJustifyContent("center")}
              className={`button`}
            >
              center
            </button>
            <button
              onClick={() => setJustifyContent("space-between")}
              className={`button`}
            >
              space-between
            </button>
            <button
              onClick={() => setJustifyContent("space-around")}
              className={`button`}
            >
              space-around
            </button>
            <button
              onClick={() => setJustifyContent("space-evenly")}
              className={`button`}
            >
              space-evenly
            </button>
          </div>
        </div>

        <div className={`${styl["align__items"]}`}>
          <h3>align items</h3>
          <div className={`${styl["align__items-wrapper"]}`}>
            <button
              onClick={() => setAlignItems("stretch")}
              className={`button`}
            >
              stretch
            </button>
            <button
              onClick={() => setAlignItems("flex-start")}
              className={`button`}
            >
              flex-start
            </button>
            <button
              onClick={() => setAlignItems("flex-end")}
              className={`button`}
            >
              flex-end
            </button>
            <button
              onClick={() => setAlignItems("center")}
              className={`button`}
            >
              center
            </button>
            <button
              onClick={() => setAlignItems("baseline")}
              className={`button`}
            >
              baseline
            </button>
          </div>
        </div>

        <div className={`${styl["align__content"]}`}>
          <h3>align content</h3>
          <div className={`${styl["align__content-wrapper"]}`}>
            <button
              onClick={() => setAlignContent("flex-start")}
              className={`button`}
            >
              flex-start
            </button>
            <button
              onClick={() => setAlignContent("flex-end")}
              className={`button`}
            >
              flex-end
            </button>
            <button
              onClick={() => setAlignContent("center")}
              className={`button`}
            >
              center
            </button>
            <button
              onClick={() => setAlignContent("space-between")}
              className={`button`}
            >
              space-between
            </button>
            <button
              onClick={() => setAlignContent("space-around")}
              className={`button`}
            >
              space-around
            </button>
            <button
              onClick={() => setAlignContent("space-evenly")}
              className={`button`}
            >
              space-evenly
            </button>
            <button
              onClick={() => setAlignContent("stretch")}
              className={`button`}
            >
              stretch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
