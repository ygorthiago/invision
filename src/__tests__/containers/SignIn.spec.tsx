import { render, fireEvent, waitFor } from '@testing-library/react/';
import React from 'react';
import SignIn from '../../containers/SignIn';
import { mockedUser } from '../../containers/SignIn/mockedUser';
import { StoresProvider } from '../../stores';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../stores/ToastStore', () => {
  return {
    ToastStore: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    const { getByTestId } = render(
      <StoresProvider>
        <SignIn />,
      </StoresProvider>,
    );

    const usernameField = getByTestId('username-input');
    const passwordField = getByTestId('password-input');
    const buttonElement = getByTestId('signin-button');

    fireEvent.change(usernameField, {
      target: { value: mockedUser.username },
    });
    fireEvent.change(passwordField, { target: { value: mockedUser.password } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/home');
    });

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'success' }),
      );
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByTestId } = render(
      <StoresProvider>
        <SignIn />,
      </StoresProvider>,
    );

    const usernameField = getByTestId('username-input');
    const passwordField = getByTestId('password-input');
    const buttonElement = getByTestId('signin-button');

    fireEvent.change(usernameField, {
      target: { value: 'not-valid-email@invalid.com' },
    });
    fireEvent.change(passwordField, { target: { value: '123123' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });
});
