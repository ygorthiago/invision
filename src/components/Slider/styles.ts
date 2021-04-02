import styled from 'styled-components';

export const SliderContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SliderNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SliderNavigation = styled.div<{ isSelected: boolean }>`
  height: 11px;
  width: 12px;
  border-radius: 50px;
  background: var(--white);
  opacity: 0.5;
  cursor: pointer;
  margin: 10px;

  ${props =>
    props.isSelected && {
      width: `26px`,
      opacity: '1',
    }}
`;

export const StyledImageContainer = styled.section<{ isCurrentImage: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 705px;
    height: 555px;

    @media (max-width: 1480px) {
      width: 500px;
    }

    @media (max-width: 1000px) {
      width: 400px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 553px;
    margin-top: 31px;
    color: var(--white);

    h2 {
      font-size: 30px;
      margin-bottom: 20px;
      text-align: center;
    }

    h3 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 30px;
    }

    @media (max-width: 1000px) {
      width: 400px;
    }
  }

  ${props =>
    props.isCurrentImage && {
      display: `flex`,
    }}
`;
