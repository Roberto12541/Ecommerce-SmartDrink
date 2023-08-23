import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from '../context/CartContext.jsx';
import { LoginProvider } from '../context/LoginContext.jsx';
import Navbar from '../components/Navbar/Navbar';
import Home from '../Pages/Home';
import Footer from '../components/Footer/Footer.jsx';
import Servicios from '../Pages/Servicios.jsx';
import Checkout from '../Pages/Checkout.jsx';
import Productos from '../Pages/Productos.jsx';
import Nosotros from '../Pages/Nosotros.jsx';
import Cart from '../Pages/Cart.jsx';
import Login from '../Pages/Login.jsx';
import Busqueda from '../Pages/Busqueda.jsx';
import Registro from '../Pages/Registro.jsx';
import Producto from '../Pages/Producto.jsx';

const Rutas = () => {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <LoginProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/servicios' element={<Servicios />} />
                        <Route path='/productos' element={<Productos />} />
                        <Route path='/producto/:producto' element={<Producto />} />
                        <Route path='/productos/:categoria' element={<Productos />} />
                        <Route path='/nosotros' element={<Nosotros />} />
                        <Route path='/search/:busqueda?' element={<Busqueda />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Registro />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/checkout/:price/:name' element={<Checkout />} />
                    </Routes>
                    <Footer />
                </LoginProvider>
            </CarritoProvider>
        </BrowserRouter>
    )
}

export default Rutas
