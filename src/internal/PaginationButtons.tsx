import React, { useState } from "react";
import { PaginationButtonsProps } from "../types";

export default function PaginationButtons({
  screenshotList,
  buttonStyles,
  currentImageIndex,
  setCurrentImageIndex,
}: PaginationButtonsProps) {
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setInitialTouchPosition(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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
      const newIndex = currentImageIndex === 0 ? screenshotList.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex); // Directly set the new index
      setFadeOut(false);
    }, 300);
  };

  const showNextImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      const newIndex = currentImageIndex === screenshotList.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex); // Directly set the new index
      setFadeOut(false);
    }, 300);
  };

  const {
    backgroundColor = '#004F98',
    color = '#FFF',
    border = 'none',
    borderRadius = '16px',
    fontSize = '16px',
    fontFamily = 'Verdana, Geneva, Tahoma, sans-serif',
    fontWeight = '700',
    padding = '8px 16px',
  } = buttonStyles || {};

  return (
    <div
      className="preview__scroll--btns"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="preview__scroll--btn btn"
        style={{
          backgroundColor,
          color,
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
        className="preview__scroll--btn btn"
        style={{
          backgroundColor,
          color,
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
  );
}