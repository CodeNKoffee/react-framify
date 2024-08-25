"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
import '../styles/styles.css';
import { DeviceFrameProps } from "../types";
import PunchHoleCamera from '../internal/PunchHoleCamera';
import SignalIndicator from '../internal/SignalIndicator';
import WiFiInficator from '../internal/WiFiIndicator';
import BatteryIndicator from '../internal/BatteryIndicator';
import Clock from '../internal/Clock';
import PaginationButtons from '../internal/PaginationButtons';

export default function AndroidFrame({
  screenshotList,
  deviceColor,
  buttonStyles = {},
  orientation = "portrait",
  statusBar,
}: DeviceFrameProps) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const indicatorColor = statusBar.mode === "light" ? "#FFF" : "#000";

  const handleImageChange = (newIndex: number) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setFadeOut(false);
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
          borderRadius: '3rem',
          width: orientation === 'portrait' ? '250.38px' : '507.5px',
          height: orientation === 'portrait' ? '507.5px' : '250.38px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            border: '9px solid #000000',
            borderRadius: '2.8rem',
            width: '100%',
            height: '100%',
            zIndex: 100,
          }}
        >
          <img
            src={screenshotList[currentImageIndex]}
            className={`phone__frameset--img ${fadeOut ? 'fadeOut' : ''}`}
            style={{
              position: 'absolute', // Change to absolute positioning
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '2.8rem',
              zIndex: -1,
            }}
          />
          {/* Current time of the user opening the site */}
          {orientation === "portrait" && <Clock indicatorColor={indicatorColor} />}

          {/* Camera Hole Punch */}
          <PunchHoleCamera orientation={orientation} />

          {orientation === "portrait" && (
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
              {/* Signal Icon */}
              <SignalIndicator indicatorColor={indicatorColor} />
              {/* Wi-Fi Icon */}
              <WiFiInficator indicatorColor={indicatorColor} />
              {/* Battery Indicator */}
              <BatteryIndicator indicatorColor={indicatorColor} />
            </div>
          )}
        </div>
      </div>
      <PaginationButtons
        screenshotList={screenshotList}
        buttonStyles={buttonStyles}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={handleImageChange} // Updated to handle fade-out
      />
    </figure>
  );
}