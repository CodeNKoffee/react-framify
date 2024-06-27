"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
// import PhoneFrameset from "../assets/iPhone14ProFrame.png";
import '../styles/styles.css';
// import IPhoneFourteenPro from './Framesets/IPhoneFourteenPro';

interface PhoneFrameProps {
  screenshotList: string[];
  color?: string;
  buttonColor?: string;
}

export default function PhoneFrame({ screenshotList, color, buttonColor }: PhoneFrameProps) {
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
      {/* <img src={PhoneFrameset} alt="Image by svstudioart on Freepik" className="phone__frameset" /> */}
      {/* <div className={`w-[250.38px] h-[507.5px] border-[3px] border-gray-600 rounded-[2.4rem] z-10 relative`}>
        <div className="w-full h-full border-[9px] border-black p-2 rounded-[2.2rem]">
          <div className="bg-transparent rounded-lg flex justify-center items-start">
            <div className="w-1/3 h-4/12 bg-black rounded-full p-[0.4rem]">
              <div className="float-right w-1/5 rounded-full bg-gray-900 p-[0.25rem]"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <img
        src={screenshotList[currentImageIndex]}
        className={`phone__frameset--img ${fadeOut ? 'fade-out' : ''}`}
      /> */}
      {/* <div className="preview__scroll--btns">
        <button 
          className={`preview__scroll--btn btn`}
          onClick={showPreviousImage}
        >
          Previous
        </button>
        <button 
          className={`preview__scroll--btn btn`}
          onClick={showNextImage}
        >
          Next
        </button>
      </div> */}
      {/* <div className="preview__scroll--btns">
        <button 
          className={`preview__scroll--btn btn ${buttonColor ? `bg-[${buttonColor}]` : 'bg-[#004F98]'}`}
          onClick={showPreviousImage}
        >
          Previous
        </button>
        <button 
          className={`preview__scroll--btn btn ${buttonColor ? `bg-[${buttonColor}]` : 'bg-[#004F98]'}`}
          onClick={showNextImage}
        >
          Next
        </button>
      </div> */}
      <div
        style={{
          width: '250.38px',
          height: '507.5px',
          border: '3px solid #4A5568', // Tailwind's gray-600 is #4A5568
          borderRadius: '2.4rem',
          zIndex: 10,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '9px solid #000000',
            borderRadius: '2.2rem',
            zIndex: 20,
          }}
        >
          <img
            src={screenshotList[currentImageIndex]}
            className={`phone__frameset--img ${fadeOut ? 'fade-out' : ''}`}
            style={{
              position: 'relative',
              borderRadius: '1.5rem',
              height: '100%',
              width: '100%',
              zIndex: 0,
            }}
          />
          <div
            style={{
              width: '33.33%', // 1/3 of the width
              height: '33.33%', // 4/12 of the height
              backgroundColor: '#000000',
              borderRadius: '9999px', // full rounded
              padding: '0.4rem',
              position: 'absolute',
              top: '1rem', // Tailwind's top-4
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div
              style={{
                float: 'right',
                width: '20%', // 1/5 of the width
                borderRadius: '9999px', // full rounded
                backgroundColor: '#1A202C', // Tailwind's gray-900
                padding: '0.25rem',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="preview__scroll--btns">
        <button
          className={`preview__scroll--btn btn`}
          onClick={showPreviousImage}
        >
          Previous
        </button>
        <button
          className={`preview__scroll--btn btn`}
          onClick={showNextImage}
        >
          Next
        </button>
      </div>
    </figure>
  );
}