export const loginCrackedAccount = (username: string, password: string): string => {
    // Logic to authenticate cracked accounts (local storage or simple validation)
    localStorage.setItem('crackedAccount', JSON.stringify({ username, password }));
    return 'Logged in successfully with cracked account';
  };
  
  export const loginMojangAccount = async (username: string, password: string): Promise<string> => {
    // Logic to authenticate with Mojang (using OAuth, for example)
    // Placeholder for actual OAuth login flow with Mojang's API
    return 'Logged in successfully with Mojang account (OAuth2 flow)';
  };  