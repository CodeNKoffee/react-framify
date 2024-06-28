"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
import '../styles/styles.css';

interface PhoneFrameProps {
  screenshotList: string[];
  phoneColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export default function PhoneFrame({ screenshotList, phoneColor, buttonColor, buttonTextColor }: PhoneFrameProps) {
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
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '1rem', 
              left: '50%',
              borderRadius: '9999px', 
              backgroundColor: '#000',
              width: '30.33%', 
              padding: '0.4rem',
              transform: 'translateX(-50%)',
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