import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/CheckOut';
import DetailProduct from './pages/DetailProduct';
import Navbar from './components/dashboard-components/Navbar';
import Footer from './components/dashboard-components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#121212] text-white">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path="/products/:id" element={<DetailProduct />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
