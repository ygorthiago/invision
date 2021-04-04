import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { FormContainer } from './styles';
import AuthContainer from '../../components/AuthContainer';
import { mockedUser } from './mockedUser';
import { useStores } from '../../stores';

interface Inputs {
  userName: string;
  password: string;
}

function SignIn() {
  const { register, errors, handleSubmit } = useForm<Inputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const history = useHistory();

  const { toastStore } = useStores();

  function onSubmit(data: Inputs) {
    const matchUsername = data.userName === mockedUser.username;
    const matchPassword = data.password === mockedUser.password;

    if (matchUsername && matchPassword) {
      history.push('/home');

      toastStore.addToast({
        type: 'success',
        title: 'Logged!',
        description: 'Welcome to Invision',
      });
    } else {
      toastStore.addToast({
        type: 'error',
        title: 'User not found!',
        description: 'Check your credentials',
      });
    }
  }

  return (
    <AuthContainer>
      <FormContainer>
        <h1>Invision</h1>
        <h2>Welcome to Invision</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            data-testid="username-input"
            label="Username or email"
            inputName="userName"
            error={!!errors.userName?.message}
            errorMessage={errors.userName?.message ?? ''}
            maxLength={70}
            inputRef={register({
              required: {
                value: true,
                message: '* This field cannot be empty',
              },
              maxLength: 70,
              pattern: {
                value: /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: '* Invalid email',
              },
            })}
          />

          <Input
            data-testid="password-input"
            label="Password"
            inputName="password"
            type="password"
            error={!!errors.password?.message}
            errorMessage={errors.password?.message ?? ''}
            maxLength={20}
            inputRef={register({
              required: {
                value: true,
                message: '* This field cannot be empty',
              },
              maxLength: 20,
            })}
          />

          <div className="forgorPassword">
            <Link to="/">Forgot password?</Link>
          </div>

          <section>
            <Button
              data-testid="signin-button"
              type="submit"
              className="submitButton"
            >
              Sign In
            </Button>

            <span className="orDivision">
              <div /> <p>Or</p> <div />
            </span>

            <Button
              type="button"
              buttonStyle="secundary"
              className="googleButton"
            >
              <FcGoogle /> Sign In with Google
            </Button>

            <span>
              New <b>Invision</b>? <Link to="/signup">Create Account</Link>
            </span>
          </section>
        </form>
      </FormContainer>
    </AuthContainer>
  );
}

export default SignIn;
