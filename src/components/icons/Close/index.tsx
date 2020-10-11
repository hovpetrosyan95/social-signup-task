import React from "react";

interface CloseProps {
  onClick: any;
}

const Close = ({ onClick }: CloseProps) => (
  <div onClick={onClick} role="button" className="close-btn">
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="24.0607"
        y1="2.06066"
        x2="1.06066"
        y2="25.0607"
        stroke="black"
        strokeWidth="3"
      />
      <line
        x1="1.06066"
        y1="1.93934"
        x2="24.0607"
        y2="24.9393"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  </div>
);

export default Close;
