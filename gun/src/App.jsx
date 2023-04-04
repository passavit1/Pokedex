import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage, SearchPage, LoginPage } from '@atomic';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
