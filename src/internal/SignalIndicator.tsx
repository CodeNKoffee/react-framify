import React from "react";

export default function SignalIndicator({ indicatorColor }: { indicatorColor: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={indicatorColor}
        strokeWidth="3"
        width="14px"
        height="14px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 16.5h2v2h-2zM10 12.5h2v6h-2zM14 9.5h2v9h-2zM18 5.5h2v13h-2z" />
      </svg>
    </>
  ); 
}
