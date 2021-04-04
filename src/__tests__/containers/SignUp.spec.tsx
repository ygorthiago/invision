import { render, fireEvent, waitFor } from '@testing-library/react/';
import React from 'react';
import SignUp from '../../containers/SignUp';
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

describe('SignUp Page', () => {
  it('should be able to sign up', async () => {
    const { getByTestId } = render(
      <StoresProvider>
        <SignUp />,
      </StoresProvider>,
    );

    const fullNameField = getByTestId('fullName');
    const usernameField = getByTestId('username');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('signup');

    fireEvent.change(fullNameField, {
      target: { value: 'John Doe' },
    });

    fireEvent.change(usernameField, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.change(passwordField, { target: { value: '123123' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'success' }),
      );
    });
  });

  it('should not be able to sign up with invalid fill', async () => {
    const { getByTestId } = render(
      <StoresProvider>
        <SignUp />,
      </StoresProvider>,
    );

    const fullNameField = getByTestId('fullName');
    const usernameField = getByTestId('username');
    const passwordField = getByTestId('password');
    const buttonElement = getByTestId('signup');

    fireEvent.change(fullNameField, {
      target: { value: 'John' },
    });

    fireEvent.change(usernameField, {
      target: { value: 'johndoe@invalid' },
    });

    fireEvent.change(passwordField, { target: { value: '' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith('/');
    });

    await waitFor(() => {
      expect(mockedAddToast).not.toHaveBeenCalledWith(
        expect.objectContaining({ type: 'success' }),
      );
    });
  });
});
