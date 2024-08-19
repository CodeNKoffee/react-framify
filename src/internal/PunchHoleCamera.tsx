import React from "react";

export default function PunchHoleCamera({ orientation }: { orientation: string }) {
  return (
    <>
      <div style={{
        position: 'absolute',
        top: orientation === "portrait" ? '1.25rem' : '50%', 
        left: orientation === "portrait" ? '50%' : '1.25rem',
        borderRadius: '9999px', 
        backgroundColor: '#000',
        width: '10px', 
        height: '10px', 
        padding: '0.4rem',
        transform: orientation === "portrait" ? 'translateX(-50%)' : 'translateY(-50%)',
      }}></div>
    </>
  ); 
}
