import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage, SearchPage, LoginPage } from '@atomic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<InfoPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
