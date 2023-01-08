
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
