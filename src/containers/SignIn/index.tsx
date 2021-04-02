import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { FormContainer } from './styles';
import AuthContainer from '../../components/AuthContainer';

interface Inputs {
  userName: string;
  password: string;
}

function SignIn() {
  const { register, errors, handleSubmit } = useForm<Inputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  function onSubmit(data: Inputs) {
    console.log(data);
  }
  return (
    <AuthContainer>
      <FormContainer>
        <h1>Invision</h1>
        <h2>Welcome to Invision</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username or email"
            inputName="userName"
            error={!!errors.userName?.message}
            errorMessage={errors.userName?.message ?? ''}
            inputRef={register({
              required: {
                value: true,
                message: '* Este campo não pode ser vazio',
              },
              maxLength: 70,
              pattern: {
                value: /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: '* O email está incorreto',
              },
            })}
          />

          <Input
            label="Password"
            inputName="password"
            type="password"
            error={!!errors.password?.message}
            errorMessage={errors.password?.message ?? ''}
            inputRef={register({
              required: {
                value: true,
                message: '* Este campo não pode ser vazio',
              },
              maxLength: 16,
            })}
          />

          <div className="forgorPassword">
            <Link to="/">Forgot password?</Link>
          </div>

          <section>
            <Button type="submit" className="submitButton">
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
              New <b>Invision</b>? <Link to="signup">Create Account</Link>
            </span>
          </section>
        </form>
      </FormContainer>
    </AuthContainer>
  );
}

export default SignIn;
