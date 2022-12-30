import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage, SearchPage, Test } from '@atomic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<InfoPage />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
