import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage, SearchPage, LoginPage } from '@atomic';
import { useState } from 'react';
import { useToken } from './utils/token';

function App() {
  const { token, saveToken, clearToken, user, saveUser } = useToken();

  if (!token) {
    return <LoginPage setToken={saveToken} saveUser={saveUser} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SearchPage clearToken={clearToken} user={user} />}
        />
        <Route path="pokemon" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
