import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Input from '../../components/Input';

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByLabelText } = render(
      <Input label="E-mail" inputName="email" />,
    );

    expect(getByLabelText('E-mail')).toBeTruthy();
  });

  it('should have error status if has the error property', async () => {
    const { getByTestId } = render(
      <Input
        label="E-mail"
        inputName="email"
        error
        data-testid="email-input"
      />,
    );

    const inputElement = getByTestId('email-input');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputElement).toHaveStyle('color: var(--red)');
    });
  });

  it('should have error message if has the errorMessage property', async () => {
    const { getByTestId } = render(
      <Input label="E-mail" inputName="email" error errorMessage="Error" />,
    );

    const inputElement = getByTestId('input-error-message');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputElement).toHaveTextContent('Error');
    });
  });
});
