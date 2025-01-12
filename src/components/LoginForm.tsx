import React, { useState } from 'react';
import { loginCrackedAccount, loginMojangAccount } from '../utils/authUtils';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOfficial, setIsOfficial] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isOfficial) {
      // Handle official login (OAuth)
      const result = await loginMojangAccount(username, password);
      alert(result);
    } else {
      // Handle cracked account login
      const result = loginCrackedAccount(username, password);
      alert(result);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            checked={isOfficial}
            onChange={() => setIsOfficial(true)}
          />
          Official Account
        </label>
        <label>
          <input
            type="radio"
            checked={!isOfficial}
            onChange={() => setIsOfficial(false)}
          />
          Cracked Account
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;