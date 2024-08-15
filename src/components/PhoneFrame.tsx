"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
import '../styles/styles.css';

interface PhoneFrameProps {
  screenshotList: string[];
  phoneColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  statusBar: 'light' | 'dark'; // Mandatory prop
}

export default function PhoneFrame({
  screenshotList,
  phoneColor,
  buttonColor,
  buttonTextColor,
  statusBar,
}: PhoneFrameProps) {
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
          borderRadius: '2.4rem',
          width: '250.38px',
          height: '507.5px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            border: '9px solid #000000',
            borderRadius: '2.2rem',
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
              borderRadius: '1.5rem',
              width: '100%',
              height: '102%',
              zIndex: -1,
            }}
          />
          {/* Current time of the user opening the site */}
          <div
            style={{
              position: 'absolute',
              top: '1rem', 
              left: '1rem',
              color: indicatorColor,
              fontSize: '10px',
            }}
          >
            {currentTime}
          </div>
          {/* IOS wifi and signal indicators */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: indicatorColor,
            }}
          >
            {/* Signal Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={indicatorColor}
              width="12px"
              height="12px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M2 22h20V2z" />
            </svg>
            {/* Wi-Fi Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={indicatorColor}
              width="12px"
              height="12px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 21.5l-1.2-1.2c-4.8-4.7-7.8-7.6-7.8-11.1 0-3.1 2.5-5.7 5.7-5.7 1.8 0 3.4.9 4.3 2.2.9-1.3 2.5-2.2 4.3-2.2 3.1 0 5.7 2.6 5.7 5.7 0 3.5-3 6.4-7.8 11.1L12 21.5z" />
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