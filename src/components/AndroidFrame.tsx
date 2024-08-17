"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
import '../styles/styles.css';
import { DeviceFrameProps } from '../types';

export default function AndroidFrame({
  screenshotList,
  phoneColor,
  buttonColor,
  buttonTextColor,
  statusBar,
}: DeviceFrameProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null);
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

  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  const indicatorColor = statusBar === 'light' ? '#FFF' : '#000';

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
          border: `3px solid ${phoneColor ? phoneColor : '#4A5568'}`, 
          borderRadius: '3rem',
          width: '250.38px',
          height: '507.5px',
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
            className={`phone__frameset--img ${fadeOut ? 'fade-out' : ''}`}
            style={{
              position: 'relative',
              borderRadius: '1.8rem',
              width: '100%',
              height: '102%',
              zIndex: -1,
            }}
          />
          {/* Current time of the user opening the site */}
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
          {/* Camera Hole Punch */}
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            right: '1rem',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#000',
          }}></div>
          {/* iOS Wi-Fi and Signal Indicators */}
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
          </div>
        </div>
      </div>
      <div className="preview__scroll--btns">
        <button
          className={`preview__scroll--btn btn`}
          style={{
            backgroundColor: buttonColor ? buttonColor : '#004F98',
            color: buttonTextColor ? buttonTextColor : '#FFF',
          }}
          onClick={showPreviousImage}
        >
          Previous
        </button>
        <button
          className={`preview__scroll--btn btn`}
          style={{
            backgroundColor: buttonColor ? buttonColor : '#004F98',
            color: buttonTextColor ? buttonTextColor : '#FFF',
          }}
          onClick={showNextImage}
        >
          Next
        </button>
      </div>
    </figure>
  );
}