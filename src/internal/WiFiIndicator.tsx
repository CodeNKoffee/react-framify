import React from "react";

export default function WiFiInficator({ indicatorColor }: { indicatorColor: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={indicatorColor}
        strokeWidth="3"
        width="12px"
        height="12px"
      >
        {/* Largest Arc */}
        <path d="M3 9C7 4 17 4 21 9" />
        {/* Middle Arc */}
        <path d="M6 13C9 9.5 15 9.5 18 13" />
        {/* Dot */}
        <circle cx="12" cy="17" r="1" fill={indicatorColor} />
      </svg>
    </>
  ); 
}
