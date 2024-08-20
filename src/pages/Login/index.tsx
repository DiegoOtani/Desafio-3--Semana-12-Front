import React, { useState } from 'react'
import Form from './components/Form/Form';

const Login = () => {
  const [ haveLogin, setHaveLogin ] = useState<boolean>(true);

  return <main className='w-full h-full flex flex-col items-center justify-center'>
    {haveLogin ? (
      <Form 
      title='Sign in'
      message='Enter your details to continue your journey'
      handleSubmit={() => console.log('submit')}
      buttonText='Login'
      changeMessage="Don't have login yet?"
      changeClickMessage="Sign up"
      handleClick={() => setHaveLogin(!haveLogin)}
    />
    ) : (
      <Form 
        title='Sign up'
        message='Enter your details to start our journey'
        handleSubmit={() => console.log('submit')}
        buttonText='Register'
        changeMessage='Already have a login?'
        changeClickMessage='Sign in'
        handleClick={() => setHaveLogin(!haveLogin)}
      />
    )}
    
  </main>
}

export default Login;