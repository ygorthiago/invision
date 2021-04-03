import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { FormContainer } from './styles';
import AuthContainer from '../../components/AuthContainer';
import { useStores } from '../../stores';

interface Inputs {
  userName: string;
  password: string;
  fullName: string;
}

function SignUp() {
  const { register, errors, handleSubmit } = useForm<Inputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { toastStore } = useStores();
  const history = useHistory();

  function onSubmit(data: Inputs) {
    console.log(data);

    history.push('/signin');

    toastStore.addToast({
      type: 'success',
      title: 'Cadastro realizado!',
      description: 'Faça seu sign in no Invision!',
    });
  }

  return (
    <AuthContainer>
      <FormContainer>
        <h1>Invision</h1>
        <h2>Getting Started</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full name"
            inputName="fullName"
            error={!!errors.fullName?.message}
            errorMessage={errors.fullName?.message ?? ''}
            inputRef={register({
              required: {
                value: true,
                message: '* Este campo não pode ser vazio',
              },
              minLength: {
                value: 5,
                message: '* Informe o nome completo',
              },
              pattern: {
                value: /\S+\S+\S+/,
                message: '* Informe o nome completo',
              },
              maxLength: 100,
            })}
          />

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
            label="Create password"
            inputName="password"
            type="password"
            error={!!errors.password?.message}
            errorMessage={errors.password?.message ?? ''}
            inputRef={register({
              required: {
                value: true,
                message: '* Este campo não pode ser vazio',
              },
              minLength: {
                value: 6,
                message: '* A senha não pode ter menos de 6 caracteres',
              },
              maxLength: 16,
            })}
          />

          <section>
            <Button type="submit" className="submitButton">
              Sign Up
            </Button>

            <span className="orDivision">
              <div /> <p>Or</p> <div />
            </span>

            <Button
              type="button"
              buttonStyle="secundary"
              className="googleButton"
            >
              <FcGoogle /> Sign Up with Google
            </Button>

            <span>
              By signing up, you agree to <b>Invision</b> <br />
              <Link to="/">Terms of Conditions</Link> and{' '}
              <Link to="/">Privacy Policy</Link>
            </span>

            <span>
              Already on <b>Invision</b>? <Link to="/">Log in</Link>
            </span>
          </section>
        </form>
      </FormContainer>
    </AuthContainer>
  );
}

export default SignUp;
