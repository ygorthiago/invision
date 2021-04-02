import React from 'react';
import Slider from '../Slider';
import { SignInContainer, BannersContainer } from './style';

interface IAuthContainer {
  children?: React.ReactNode;
}

function AuthContainer({ children }: IAuthContainer) {
  return (
    <SignInContainer>
      <BannersContainer>
        <Slider />
      </BannersContainer>
      {children}
    </SignInContainer>
  );
}

export default AuthContainer;
