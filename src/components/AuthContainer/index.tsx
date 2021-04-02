import React from 'react';
import { SignInContainer, BannersContainer } from './style';

interface IAuthContainer {
  children?: React.ReactNode;
}

function AuthContainer({ children }: IAuthContainer) {
  return (
    <SignInContainer>
      <BannersContainer />
      {children}
    </SignInContainer>
  );
}

export default AuthContainer;
