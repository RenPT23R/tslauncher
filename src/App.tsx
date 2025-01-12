import React from 'react';
import LoginForm from './components/LoginForm';
import AccountSelector from './components/AccountSelector';
import ServerList from './components/ServerList';

const App: React.FC = () => {
  return (
    <div>
      <h1>TSLauncher</h1>
      <AccountSelector />
      <LoginForm />
      <ServerList />
    </div>
  );
};

export default App;