
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { login } from './networks';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post(login(), {
        username: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

  
      if (response.data) {
       
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        navigate('/dashboard'); 
      }
    } catch (error) {
      console.error('Login failed:', error.response || error.message);
    
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        </div>

        <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
       
       <div>
       <button type="submit">Login</button>
       </div>
    
     
      </form>
    </div>
  );
}

export default LoginPage;
