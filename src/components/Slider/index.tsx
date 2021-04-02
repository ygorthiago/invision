import React, { useEffect, useRef, useState } from 'react';
import { SliderData } from './SliderData';
import {
  SliderContainer,
  SliderNavigationContainer,
  SliderNavigation,
  StyledImageContainer,
} from './styles';

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout>();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentImageIndex(prevIndex =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1,
        ),
      3 * 1000,
    );

    return () => {
      resetTimeout();
    };
  }, [currentImageIndex]);

  return (
    <SliderContainer>
      {SliderData.map((slide, index) => {
        const isCurrentImage = index === currentImageIndex;

        return (
          <StyledImageContainer
            key={slide.imageTitle}
            isCurrentImage={isCurrentImage}
          >
            <img src={slide.imageUrl} alt={slide.imageTitle} />

            <div>
              <h2>{slide.imageTitle}</h2>
              <h3>{slide.imageDescription}</h3>
            </div>
          </StyledImageContainer>
        );
      })}
      <SliderNavigationContainer>
        {SliderData.map((slider, index) => {
          return (
            <SliderNavigation
              key={slider.imageTitle}
              isSelected={index === currentImageIndex}
              onClick={() => {
                setCurrentImageIndex(index);
              }}
            />
          );
        })}
      </SliderNavigationContainer>
    </SliderContainer>
  );
}

export default Slider;
