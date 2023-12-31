import React, { useEffect, useState } from 'react';
import '../dist/PhoneFrame.css';

// Declare the image variable
const PhoneFrameset: any = require('../assets/iphone-14-pro.png');


export interface PhoneFrameProps {
  screenshotList: string[]; // Array of strings representing image file names
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ screenshotList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null); // Add type annotation
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0); // Reset the current image index when screenshotList changes
  }, [screenshotList]);

  useEffect(() => {
    setCurrentImageIndex(0); // Reset the current image index when screenshotList changes
  }, [screenshotList]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setInitialTouchPosition(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!initialTouchPosition) return;

    const touch = e.touches[0];
    const currentTouchPosition = touch.clientX;
    const touchDistance = currentTouchPosition - initialTouchPosition;

    if (touchDistance > 50) {
      // Swipe right, show previous image
      showPreviousImage();
    } else if (touchDistance < -50) {
      // Swipe left, show next image
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
      <img src={PhoneFrameset} alt="Image by svstudioart on Freepik" className="phone__frameset" />
      <img
        src={screenshotList[currentImageIndex]}
        alt=""
        className={`phone__frameset--img ${fadeOut ? 'fade-out' : ''}`}
      />
      <div className="preview__scroll--btns">
        <button className="preview__scroll--btn btn" onClick={showPreviousImage}>Previous</button>
        <button className="preview__scroll--btn btn" onClick={showNextImage}>Next</button>
      </div>
    </figure>
  );
};

export default PhoneFrame;