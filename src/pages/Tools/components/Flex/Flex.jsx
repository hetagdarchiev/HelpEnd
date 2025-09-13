import { useState } from "react";
import Range from "../../../../components/Range/Range";
import styl from "./Flex.module.scss";
export default function Flex() {
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [flexGrow, setFlexGrow] = useState([0, 0, 0]);
  const [flexShrink, setFlexShrink] = useState([1, 1, 1]);
  const [flexBasis, setFlexBasis] = useState([0, 0, 0]);
  const [order, setOrder] = useState([0, 0, 0]);
  const [flex, setFlex] = useState([1, 1, 1]);
  const [width, setWidth] = useState("65");
  const styleObject = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    width: `${width}%`,
  };
  const handleInputChange = (index, newValue, setter) => {
    setter((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue === "" ? 1 : Number(newValue);
      return updatedValues;
    });
  };
  const handleWidth = (param) => {
    setWidth(param);
  };
  return (
    <section className={`${styl["flex"]} container`}>
      <Range
        rangeValueFunc={handleWidth}
        maxValue={100}
        minValue={20}
        val={width}
        style={{ marginInline: "auto", display: "block" }}
      />
      <div style={styleObject} className={`${styl["flex__monitor"] || ""}`}>
        <div
          style={{
            flexGrow: flexGrow[0],
            flexShrink: flexShrink[0],
            flexBasis: flexBasis[0],
            order: order[0],
            backgroundColor: "yellow",
            color: 'black'
          }}
        >
          grow: {flexGrow[0]}<br/>
          shrink: {flexShrink[0] }<br/>
          order: {order[0]} <br />
          basis: {flexBasis[0]}
        </div>
        <div
          style={{
            flexGrow: flexGrow[1],
            flexShrink: flexShrink[1],
            flexBasis: flexBasis[1],
            order: order[1],
            backgroundColor: "red",
          }}
        >
          grow: {flexGrow[1]}<br/>
          shrink: {flexShrink[1] }<br/>
          order: {order[1]} <br />
          basis: {flexBasis[1]}
        </div>
        <div
          style={{
            flexGrow: flexGrow[2],
            flexShrink: flexShrink[2],
            flexBasis: flexBasis[2],
            order: order[2],
            backgroundColor: "blue",
          }}
        >
          grow: {flexGrow[2]}<br/>
          shrink: {flexShrink[2] }<br/>
          order: {order[2]} <br />
          basis: {flexBasis[2]}
        </div>
      </div>
      <div className={`${styl["flex__controller"] || ""}`}>
        <fieldset className={`${styl["each-element-setting__group"] || ""}`}>
          <legend>Setting up each element</legend>
          <div className={`${styl["element-grow__group"] || ""}`}>
            <h3>flex grow</h3>
            <input
              type="number"
              min={0}
              max={100}
              onChange={(e) =>
                handleInputChange(0, e.target.value, setFlexGrow)
              }
              value={flexGrow[0]}
            />
            <input
              type="number"
              min={0}
              max={100}
              value={flexGrow[1]}
              onChange={(e) =>
                handleInputChange(1, e.target.value, setFlexGrow)
              }
            />
            <input
              type="number"
              min={0}
              max={100}
              onChange={(e) =>
                handleInputChange(2, e.target.value, setFlexGrow)
              }
              value={flexGrow[2]}
            />
          </div>
          <div className={`${styl["element-shrink__group"] || ""}`}>
            <h3>flex shrink</h3>
            <input
              type="number"
              name=""
              value={flexShrink[0]}
              onChange={(e) =>
                handleInputChange(0, e.target.value, setFlexShrink)
              }
              id=""
            />
            <input
              type="number"
              value={flexShrink[1]}
              onChange={(e) =>
                handleInputChange(1, e.target.value, setFlexShrink)
              }
            />
            <input
              type="number"
              value={flexShrink[2]}
              onChange={(e) =>
                handleInputChange(2, e.target.value, setFlexShrink)
              }
            />
          </div>
          <div>
            <h3>flex basis</h3>
            <input
              type="number"
              min={0}
              value={flexBasis[0]}
              onChange={(e) =>
                handleInputChange(0, e.target.value, setFlexBasis)
              }
            />
            <input
              type="number"
              min={0}
              value={flexBasis[1]}
              onChange={(e) =>
                handleInputChange(1, e.target.value, setFlexBasis)
              }
            />
            <input
              type="number"
              min={0}
              value={flexBasis[2]}
              onChange={(e) =>
                handleInputChange(2, e.target.value, setFlexBasis)
              }
            />
          </div>
          <div>
            <h3>order</h3>
            <input
              type="number"
              value={order[0]}
              onChange={(e) => handleInputChange(0, e.target.value, setOrder)}
            />
            <input
              type="number"
              value={order[1]}
              onChange={(e) => handleInputChange(1, e.target.value, setOrder)}
            />
            <input
              type="number"
              value={order[2]}
              onChange={(e) => handleInputChange(2, e.target.value, setOrder)}
            />
          </div>
        </fieldset>
        <fieldset className={`${styl["group-setting"] || ""}`}>
          <legend>Flex setting</legend>
          <div className={`${styl["flex__direction"] || ""}`}>
            <h3>flex direction</h3>
            <div className={`${styl["flex__direction-wrapper"] || ""}`}>
              <button onClick={() => setDirection("row")} className={`button`}>
                row
              </button>
              <button
                onClick={() => setDirection("row-reverse")}
                className={`button`}
              >
                row-reverse
              </button>
              <button
                onClick={() => setDirection("column")}
                className={`button`}
              >
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
          <div className={`${styl["flex__wrap"] || ""}`}>
            <h3>flex wrap</h3>
            <div className={`${styl["flex__wrap-wrapper"] || ""}`}>
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
          <div className={`${styl["flex__justify-content"] || ""}`}>
            <h3>justify content</h3>
            <div className={`${styl["justify-content-wrapper"] || ""}`}>
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
          <div className={`${styl["align__items"] || ""}`}>
            <h3>align items</h3>
            <div className={`${styl["align__items-wrapper"] || ""}`}>
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
          <div className={`${styl["align__content"] || ""}`}>
            <h3>align content</h3>
            <div className={`${styl["align__content-wrapper"] || ""}`}>
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
        </fieldset>
      </div>
    </section>
  );
}
