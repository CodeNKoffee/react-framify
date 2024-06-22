import React, { useEffect, useState, TouchEvent } from 'react';
import PhoneFrameset from '../assets/iPhone14ProFrame.png'
import '../styles/styles.css';

interface PhoneFrameProps {
  screenshotList: string[];
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ screenshotList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

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
      <img src={PhoneFrameset} alt="Image by svstudioart on Freepik" className="phone__frameset" />
      <img
        src={screenshotList[currentImageIndex]}
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
