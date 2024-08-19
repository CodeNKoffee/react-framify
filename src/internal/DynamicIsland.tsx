import React from "react";

export default function DynamicIsland({ orientation }: { orientation: string }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: orientation === "portrait" ? '1rem' : '50%', 
          left: orientation === "portrait" ? '50%' : '0.05rem',
          borderRadius: '9999px', 
          backgroundColor: '#000',
          width: orientation === "portrait" ? '30.33%' : '16%', 
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
