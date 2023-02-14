import './style.css';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='login'>
      <button className='login-btn' onClick={() => loginWithRedirect()}>
        Login
      </button>
    </div>
  );
}

export default App;
