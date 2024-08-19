import React from "react";

export default function Clock({ indicatorColor }: { indicatorColor: string }) {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '1.1rem', 
          left: '2rem',
          color: indicatorColor,
          fontSize: '10px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        }}
      >
        {currentTime}
      </div>
    </>
  ); 
}
