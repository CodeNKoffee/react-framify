import React from "react";

export default function DynamicIsland({ orientation }: { orientation: string }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: orientation === "portrait" ? '1rem' : '50%', 
          left: orientation === "portrait" ? '50%' : '1rem',
          borderRadius: '9999px', 
          backgroundColor: '#000',
          width: '30.33%', 
          padding: '0.4rem',
          transform: orientation === "portrait" ? 'translateX(-50%)' : 'translateY(-50%) rotate(-90deg)',
        }}
      >
        <div
          style={{
            borderRadius: '9999px',
            backgroundColor: '#1A202C', 
            float: 'right',
            width: '20%', 
            padding: '0.25rem',
          }}
        ></div>
      </div>
    </>
  );
}
