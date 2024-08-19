"use client";

import React, { useEffect, useState, TouchEvent } from "react";
import "../styles/styles.css";
import { DeviceFrameProps } from "../types";
import Clock from "../internal/Clock";
import SignalIndicator from "../internal/SignalIndicator";
import WiFiInficator from "../internal/WiFiIndicator";
import BatteryIndicator from "../internal/BatteryIndicator";

export default function IPadFrame({
  screenshotList,
  deviceColor,
  buttonStyles = {},
  orientation,
  statusBar,
}: DeviceFrameProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState<
    number | null
  >(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [screenshotList]);

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    setInitialTouchPosition(touch.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (initialTouchPosition === null) return;

    const touch = e.touches[0];
    const currentTouchPosition = touch.clientX;
    const touchDistance = currentTouchPosition - initialTouchPosition;

    if (touchDistance > 50) {
      showPreviousImage();
    } else if (touchDistance < -50) {
      showNextImage();
    }
  };

  const handleTouchEnd = () => {
    setInitialTouchPosition(null);
  };

  const showPreviousImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? screenshotList.length - 1 : prevIndex - 1
      );
      setFadeOut(false);
    }, 300);
  };

  const showNextImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === screenshotList.length - 1 ? 0 : prevIndex + 1
      );
      setFadeOut(false);
    }, 300);
  };
  const indicatorColor = statusBar.mode === "light" ? "#FFF" : "#000";
  const {
    buttonColor = "#004F98",
    buttonTextColor = "#FFF",
    border = "none",
    borderRadius = "16px",
    fontSize = "16px",
    fontFamily = "Verdana, Geneva, Tahoma, sans-serif",
    fontWeight = "700",
    padding = "8px 16px",
  } = buttonStyles;
  return (
    <figure
      className="phone__frameset--wrapper preview__phone--mockup"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          boxSizing: 'border-box',
          position: 'relative',
          border: `3px solid ${deviceColor ? deviceColor : '#4A5568'}`, 
          borderRadius: '1.5rem', // Adjusted for iPad-like corners
          width: orientation === 'portrait' ? '400px' : '533.33px', // Adjusted for 4:3 aspect ratio
          height: orientation === 'portrait' ? '533.33px' : '400px', // Adjusted for 4:3 aspect ratio
        }}
      >
        <div
          style={{
            border: "9px solid #000000",
            borderRadius: "2.8rem",
            width: "100%",
            height: "100%",
            zIndex: 100,
          }}
        >
          <img
            src={screenshotList[currentImageIndex]}
            className={`phone__frameset--img ${fadeOut ? "fade-out" : ""}`}
            style={{
              position: "absolute", // Change to absolute positioning
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2.8rem",
              zIndex: -1,
            }}
          />
          {/* Current time of the user opening the site */}
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
            {/* Signal Icon */}
            <SignalIndicator indicatorColor={indicatorColor} />
            {/* Wi-Fi Icon */}
            <WiFiInficator indicatorColor={indicatorColor} />
            {/* Battery Indicator */}
            <BatteryIndicator indicatorColor={indicatorColor} />
          </div>
        </div>
      </div>
      <div className="preview__scroll--btns">
        <button
          className={`preview__scroll--btn btn`}
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
            border,
            borderRadius,
            fontSize,
            fontFamily,
            fontWeight,
            padding,
          }}
          onClick={showPreviousImage}
        >
          Previous
        </button>
        <button
          className={`preview__scroll--btn btn`}
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
            border,
            borderRadius,
            fontSize,
            fontFamily,
            fontWeight,
            padding,
          }}
          onClick={showNextImage}
        >
          Next
        </button>
      </div>
    </figure>
  );
}
