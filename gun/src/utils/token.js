import { useState } from 'react';

function useToken() {
  const saveToken = (tokenDate) => {
    window.localStorage.setItem('token', JSON.stringify(tokenDate));
    setToken(tokenDate);
  };

  const saveUser = (userDate) => {
    window.localStorage.setItem('user', JSON.stringify(userDate));
    setUser(userDate);
  };

  const getToken = () => {
    let tokenString = window.localStorage.getItem('token');
    let userString = window.localStorage.getItem('user');

    let userToken = JSON.parse(tokenString);
    let userData = JSON.parse(userString);

    if (userToken) {
      return { userToken, userData };
    } else {
      return { userToken: '', userData: '' };
    }
  };

  const clearToken = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    setToken('');
    setUser('');
  };

  const [token, setToken] = useState(getToken().userToken);
  const [user, setUser] = useState(getToken().userData);

  return {
    token,
    saveToken,
    clearToken,
    saveUser,
    user
  };
}

export { useToken };
