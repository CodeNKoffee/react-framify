"use client"

import React, { useEffect, useState, TouchEvent } from 'react';
// import PhoneFrameset from "../assets/iPhone14ProFrame.png";
import '../styles/styles.css';
// import IPhoneFourteenPro from './Framesets/IPhoneFourteenPro';

interface PhoneFrameProps {
  screenshotList: string[];
}

export default function PhoneFrame({ screenshotList }: PhoneFrameProps) {
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
      {/* <IPhoneFourteenPro /> */}
      {/* <div className="w-[250.38px] h-[507.5px] border-[3px] border-gray-600 rounded-[2.4rem] z-10 relative">
        <div className="w-full h-full border-[9px] border-black p-2 rounded-[2.2rem]">
          <div className="bg-transparent rounded-lg flex justify-center items-start">
            <div className="w-1/3 h-4/12 bg-black rounded-full p-[0.4rem]">
              <div className="float-right w-1/5 rounded-full bg-gray-900 p-[0.25rem]"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <img src={PhoneFrameset} alt="Image by svstudioart on Freepik" className="phone__frameset" /> */}
      <div className="w-[250.38px] h-[507.5px] border-[3px] border-gray-600 rounded-[2.4rem] z-10 relative">
              <img
                src={screenshotList[currentImageIndex]}
                className={`phone__frameset--img ${fadeOut ? 'fade-out' : ''}`}
              />
        <div className="w-full h-full border-[9px] border-black p-2 rounded-[2.2rem]">
          <div className="bg-transparent rounded-lg flex justify-center items-start">
            <div className="w-1/3 h-4/12 bg-black rounded-full p-[0.4rem]">
              <div className="float-right w-1/5 rounded-full bg-gray-900 p-[0.25rem]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="preview__scroll--btns">
        <button className="preview__scroll--btn btn" onClick={showPreviousImage}>Previous</button>
        <button className="preview__scroll--btn btn" onClick={showNextImage}>Next</button>
      </div>
    </figure>
  );
}
