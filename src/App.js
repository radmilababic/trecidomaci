
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage'
import OrdersPage from './components/OrdersPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/' element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
