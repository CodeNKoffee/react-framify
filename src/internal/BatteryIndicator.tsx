import React from "react";

export default function BatteryIndicator({ indicatorColor }: { indicatorColor: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 12"
        width="16.6"
        height="8"
        fill="none"
        stroke={indicatorColor}
        strokeWidth="1"
      >
        {/* Main battery body */}
        <rect x="0.5" y="0.5" width="21" height="11" rx="2" ry="2" />
        
        {/* Battery terminal */}
        <path d="M23 4V8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Battery level (adjust width to change level) */}
        <rect x="2" y="2" width="18" height="8" fill={indicatorColor} />
      </svg>
    </>
  ); 
}
