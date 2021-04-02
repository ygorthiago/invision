import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {
  SliderContainer,
  SliderNavigationContainer,
  SliderNavigation,
  StyledImageContainer,
} from './styles';

function Slider() {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const sliderNavigation = [];

  for (let i = 0; i < SliderData.length; i + 1) {
    sliderNavigation.push(i);
  }

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setcurrentImageIndex(prevIndex =>
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
        {sliderNavigation.map(index => {
          return (
            <SliderNavigation
              key={index}
              isSelected={index === currentImageIndex}
              onClick={() => {
                setcurrentImageIndex(index);
              }}
            />
          );
        })}
      </SliderNavigationContainer>
    </SliderContainer>
  );
}

export default Slider;
