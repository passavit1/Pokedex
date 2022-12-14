import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage, SearchPage } from '@atomic';

function App() {
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
