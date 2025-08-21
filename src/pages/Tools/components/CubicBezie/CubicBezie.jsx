import React, { useState, useRef, useCallback, useEffect } from "react";
import "./CubicBezie.module.scss";

const CubicBezierEditor = ({
  width = 400,
  height = 400,
  onBezierChange,
  initialPoints = [
    [0, 0],
    [0.25, 0.1],
    [0.75, 0.9],
    [1, 1],
  ],
}) => {
  const [points, setPoints] = useState(initialPoints);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const svgRef = useRef();

  const toScreenCoords = useCallback(
    ([x, y]) => [x * width, height - y * height],
    [width, height]
  );

  const toNormalizedCoords = useCallback(
    ([x, y]) => [
      Math.max(0, Math.min(1, x / width)),
      Math.max(0, Math.min(1, 1 - y / height)),
    ],
    [width, height]
  );

  const handleMouseDown = useCallback((index, e) => {
    e.preventDefault();
    setSelectedPoint(index);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (selectedPoint === null) return;

      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPoints = [...points];
      const [normX, normY] = toNormalizedCoords([x, y]);

      if (selectedPoint === 0 || selectedPoint === 3) {
        newPoints[selectedPoint] = [points[selectedPoint][0], normY];
      } else {
        newPoints[selectedPoint] = [normX, normY];
      }

      setPoints(newPoints);
      onBezierChange?.(newPoints);
    },
    [selectedPoint, points, toNormalizedCoords, onBezierChange]
  );

  const handleMouseUp = useCallback(() => {
    setSelectedPoint(null);
  }, []);

  useEffect(() => {
    if (selectedPoint !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [selectedPoint, handleMouseMove, handleMouseUp]);

  const calculateBezierPoint = (t) => {
    const [p0, p1, p2, p3] = points;
    const x =
      Math.pow(1 - t, 3) * p0[0] +
      3 * Math.pow(1 - t, 2) * t * p1[0] +
      3 * (1 - t) * Math.pow(t, 2) * p2[0] +
      Math.pow(t, 3) * p3[0];

    const y =
      Math.pow(1 - t, 3) * p0[1] +
      3 * Math.pow(1 - t, 2) * t * p1[1] +
      3 * (1 - t) * Math.pow(t, 2) * p2[1] +
      Math.pow(t, 3) * p3[1];

    return [x, y];
  };

  const bezierPoints = [];
  for (let t = 0; t <= 1; t += 0.01) {
    bezierPoints.push(calculateBezierPoint(t));
  }

  const pathData = bezierPoints
    .map((point, index) => {
      const [x, y] = toScreenCoords(point);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="cubic-bezier-simple">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="coordinate-system"
        onMouseLeave={handleMouseUp}
      >
        <defs>
          <pattern
            id="gridPattern"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#gridPattern)"
          className="grid-background"
        />

        <line x1="0" y1={height} x2={width} y2={height} className="axis-x" />
        <line x1="0" y1={height} x2="0" y2="0" className="axis-y" />

        {[0, 0.25, 0.5, 0.75, 1].map((value) => (
          <g key={`x-${value}`}>
            <line
              x1={value * width}
              y1={height - 5}
              x2={value * width}
              y2={height + 5}
              className="axis-tick"
            />
            <text
              x={value * width}
              y={height + 20}
              className="axis-label"
              textAnchor="middle"
            >
              {value}
            </text>
          </g>
        ))}

        {[0, 0.25, 0.5, 0.75, 1].map((value) => (
          <g key={`y-${value}`}>
            <line
              x1={-5}
              y1={height - value * height}
              x2={5}
              y2={height - value * height}
              className="axis-tick"
            />
            <text
              x={-15}
              y={height - value * height + 4}
              className="axis-label"
              textAnchor="end"
            >
              {value}
            </text>
          </g>
        ))}

        <path d={pathData} className="bezier-curve" />

        <line
          x1={toScreenCoords(points[0])[0]}
          y1={toScreenCoords(points[0])[1]}
          x2={toScreenCoords(points[1])[0]}
          y2={toScreenCoords(points[1])[1]}
          className="control-line"
        />
        <line
          x1={toScreenCoords(points[2])[0]}
          y1={toScreenCoords(points[2])[1]}
          x2={toScreenCoords(points[3])[0]}
          y2={toScreenCoords(points[3])[1]}
          className="control-line"
        />

        {points.map((point, index) => {
          const [x, y] = toScreenCoords(point);
          const isControlPoint = index === 1 || index === 2;

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={6}
              className={isControlPoint ? "control-point" : "anchor-point"}
              onMouseDown={(e) => handleMouseDown(index, e)}
            />
          );
        })}

        <text x={width - 15} y={height - 10} className="axis-title">
          x
        </text>
        <text x={15} y={15} className="axis-title">
          y
        </text>
      </svg>
    </div>
  );
};

export default CubicBezierEditor;
