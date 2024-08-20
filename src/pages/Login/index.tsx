import React from 'react'
import Form from './components/Form/Form';

const Login = () => {
  return <main className='w-full h-full flex flex-col items-center justify-center'>
    <Form 
      title='Sign in'
      message='Enter your details to continue your journey'
      handleSubmit={() => console.log('submit')}
      buttonText='Login'
      changeMessage="Don't have login yet?"
      changeClickMessage="Sign up"
      handleClick={() => console.log('change form')}
    />
  </main>
}

export default Login;