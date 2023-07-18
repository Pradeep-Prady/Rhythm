import React from "react";
import "./audioplayer.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  let radius = size / 2 - 10;

  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

export default function ProgressCircle({
  percentage,
  isPlaying,
  image,
  size,
  color,
}) {
  let strokeWidth1 = "0.3rem";
  let strokeWidth2 = "0.6rem";

  if (window.matchMedia("(max-width: 768px)").matches) {
    strokeWidth1 = "0.2rem";
    strokeWidth2 = "0.3rem";
  }
  if (window.matchMedia("(max-width: 576px)").matches) {
    strokeWidth1 = "0.1rem";
    strokeWidth2 = "0.2rem";
  }

  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={strokeWidth1} color="white" size={size} />
          <Circle
            strokeWidth={strokeWidth2}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="white" />
          </clipPath>

          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="white" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={30}
          y={30}
          width={2 * (size / 2) - 30}
          height={2 * (size / 2) - 30}
          // href="https://pngimg.com/uploads/vinyl_PNG107.png"
          href={image}
          clipPath="url(#myCircle)"
        />
        {/* <image
          className={isPlaying ? "active" : ""}
          x={100}
          y={100}
          width={2 * (size / 2) - 100}
          height={2 * (size / 2) - 100}
          href={image}
          clipPath="url(#myInnerCircle)"

        /> */}
      </svg>
    </div>
  );
}
