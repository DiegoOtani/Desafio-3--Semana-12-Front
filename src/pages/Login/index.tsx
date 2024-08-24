import React, { useState } from 'react'
import Form from './components/Form/Form';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../services/firebase/firebaseService';

const Login = () => {
  const [ haveLogin, setHaveLogin ] = useState<boolean>(true);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleLogin = async() => {
    const { user, error: firebaseError } = await loginWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    return firebaseError || !user
      ? console.log(firebaseError)
      : console.log(user);
  };

  const handleRegister = async() => {
    const { user, error: firebaseError } = await registerWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    return firebaseError || !user
      ? console.log(firebaseError)
      : console.log(user);
  };

  return <main className="w-full h-full flex flex-col items-center justify-center bg-[url(https://www.vestibulandoweb.com.br/wp-content/uploads/2024/01/viagem-ia.jpg)] bg-cover bg-center">
    {haveLogin ? (
      <Form 
      title='Sign in'
      message='Enter your details to continue your journey'
      handleSubmit={handleLogin}
      buttonText='Login'
      changeMessage="Don't have login yet?"
      changeClickMessage="Sign up"
      handleClick={() => setHaveLogin(!haveLogin)}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      inputEmailValue={email}
      inputPasswordValue={password}
    />
    ) : (
      <Form 
        title='Sign up'
        message='Enter your details to start our journey'
        handleSubmit={handleRegister}
        buttonText='Register'
        changeMessage='Already have a login?'
        changeClickMessage='Sign in'
        handleClick={() => setHaveLogin(!haveLogin)}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        inputEmailValue={email}
        inputPasswordValue={password}
      />
    )}
    
  </main>
}

export default Login;