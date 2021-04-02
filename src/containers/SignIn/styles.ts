import styled from 'styled-components';

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px;
  width: 100%;

  h1 {
    align-self: flex-end;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 35px;
  }

  h2 {
    margin-bottom: 15px;
    color: var(--grey-500);
    font-size: 24px;
  }

  form {
    width: 100%;

    div:not(:first-child) {
      margin-top: 18px;
    }

    .forgorPassword {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        font-size: 14px;
        text-decoration: none;
        color: var(--grey-500);
        translate: all 0.3s;

        &:hover {
          filter: brightness(0.8);
          text-decoration: underline;
        }
      }
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .submitButton {
        width: 175px;
      }

      .googleButton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 263px;

        svg {
          font-size: 30px;
          margin-right: 20px;
        }
      }

      span {
        margin-top: 40px;
        font-size: 14px;
        color: var(--grey-500);

        a {
          color: var(--green-mint);
          translate: all 0.3s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }

      button {
        margin-top: 20px;
      }

      .orDivision {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          height: 1px;
          width: 100%;
          background: var(--grey-200);
          margin: 0;
        }

        p {
          margin: 0 20px;
          color: var(--grey-500);
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 300px) {
    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 600px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 73px;
      margin-right: 10%;
      font-size: 35px;
    }

    h2 {
      margin-bottom: 69px;
      font-size: 30px;
    }

    form {
      width: 433px;
    }

    .orDivision {
      width: 356px !important;
    }
  }
`;
