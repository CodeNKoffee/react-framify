import React, { useEffect, useState } from 'react';
import PhoneFrameset from './assets/iphone-14-pro.png';
import '../styles/styles.css';

const PhoneFrame = ({ screenshotList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialTouchPosition, setInitialTouchPosition] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    console.log("Debugging inside useEffect: ", require('./assets/iphone-14-pro.png'));
    setCurrentImageIndex(0); // Reset the current image index when screenshotList changes
  }, [screenshotList]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setInitialTouchPosition(touch.clientX);
  };

  const handleTouchMove = (e) => {
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
      {console.log("Debugging inside the component itself: ", require('./assets/iphone-14-pro.png'))}
      <img
        src={screenshotList[currentImageIndex]}
        alt={screenshotList[i]}     // Added alternative text according to postion in array
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