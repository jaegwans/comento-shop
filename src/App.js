import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basket from './pages/Basket';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <BrowserRouter basename="comento-shop">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="product/:productId" element={<ProductDetail />} />

                <Route path="/basket" element={<Basket />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
