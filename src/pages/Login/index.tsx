import { useState, useEffect } from 'react'
import Form from './components/Form/Form';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../services/firebase/firebaseService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [ haveLogin, setHaveLogin ] = useState<boolean>(true);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) navigate('/');      
    })
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    const { user, error: firebaseError } = await loginWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    return firebaseError || !user
      ? toast.error(firebaseError ||  'Login failed. Please try again.')
      : toast.success("Login successful!") &&  navigate('/');
  };

  const handleRegister = async() => {
    const { user, error: firebaseError } = await registerWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    return firebaseError || !user
      ? toast.error(firebaseError ||  'Login failed. Please try again.')
      : toast.success("Register successful!") &&  navigate('/');
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