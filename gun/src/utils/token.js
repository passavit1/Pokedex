import { useState } from 'react';
import jwt_decode from 'jwt-decode';

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
      let decoded = jwt_decode(userToken);
      let currentTime = Math.floor(new Date().getTime() / 1000);

      if (decoded.exp - currentTime < 0) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        return { userToken: '', userData: '' };
      }

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

  // console.log(token);
  return {
    token,
    saveToken,
    clearToken,
    saveUser,
    user
  };
}

export { useToken };
