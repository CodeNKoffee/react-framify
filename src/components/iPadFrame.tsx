import React, { useState } from "react";
import "../styles/styles.css";
import { DeviceFrameProps } from "../types";
import Clock from "../internal/Clock";
import SignalIndicator from "../internal/SignalIndicator";
import WiFiInficator from "../internal/WiFiIndicator";
import BatteryIndicator from "../internal/BatteryIndicator";
import PaginationButtons from "../internal/PaginationButtons";

export default function IPadFrame({
  screenshotList,
  deviceColor,
  buttonStyles = {},
  orientation = "portrait",
  statusBar,
}: DeviceFrameProps) {

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const indicatorColor = statusBar.mode === "light" ? "#FFF" : "#000";

  const handleImageChange = (newIndex: number) => {
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
    }, 300);
  };
  
  return (
    <figure
      className="phone__frameset--wrapper preview__phone--mockup"
      
    >
      <div
        style={{
          boxSizing: 'border-box',
          position: 'relative',
          border: `3px solid ${deviceColor ? deviceColor : '#4A5568'}`, 
          borderRadius: '1.5rem',
          width: orientation === 'portrait' ? '400px' : '533.33px', 
          height: orientation === 'portrait' ? '533.33px' : '400px', 
        }}
      >
        <div
          style={{
            border: "9px solid #000000",
            borderRadius: "1.3rem",
            width: "100%",
            height: "100%",
            zIndex: 100,
          }}
        >
          <img
            src={screenshotList[currentImageIndex]}
            className={`phone__frameset--img`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1.1rem",
              zIndex: -1,
            }}
          />
          <Clock indicatorColor={indicatorColor} />

          <div
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: indicatorColor,
            }}
          >
            <SignalIndicator indicatorColor={indicatorColor} />
            <WiFiInficator indicatorColor={indicatorColor} />
            <BatteryIndicator indicatorColor={indicatorColor} />
          </div>
        </div>
      </div>
      <PaginationButtons
        screenshotList={screenshotList}
        buttonStyles={buttonStyles}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={handleImageChange}
      />
    </figure>
  );
}
