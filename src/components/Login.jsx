import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = { username, password };
    console.log(loginData);

    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)} 
             name="username" required autoComplete="off"/>

          <label htmlFor="password">Password</label>
          <input  type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password" required autoComplete="off"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
