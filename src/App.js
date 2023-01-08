
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage'
import OrdersPage from './components/OrdersPage';
import OrderShowPage from './components/OrderShowPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/orders/:id' element={<OrderShowPage />} />
        <Route path='*' element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
