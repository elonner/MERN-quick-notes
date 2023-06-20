import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import {useState} from 'react';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>AuthPage</h1>
      { showLogin ?
        <>
          <LoginForm setUser={setUser} />
          <button onClick={() => setShowLogin(false)}>SIGN UP</button>
        </>
        :
        <>
          <SignUpForm setUser={setUser} />
          <button onClick={() => setShowLogin(true)}>LOG IN</button>
        </>
      }
    </main>
  );
}