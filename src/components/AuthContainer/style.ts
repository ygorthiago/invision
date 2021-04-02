import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    position: absolute;
    align-items: center;
  }
`;

export const BannersContainer = styled.section`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    width: 50%;
    height: 100%;
    background-color: var(--green-mint);
  }
`;
