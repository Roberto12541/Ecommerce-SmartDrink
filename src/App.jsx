import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CartContext.jsx';
import { LoginProvider } from './context/LoginContext.jsx';
import Navbar from './components/Navbar/Navbar';
import Carrusel from './components/Carousel/Carousel';
import BannerTwo from './components/Banner/BannerTwo';
import AppSection from './components/Section/AppSection';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Team from './components/Section/Team';
import NoFound from './components/Section/NoFound';
import Promo from './components/Section/Promo';
import Contacto from './components/Section/Contacto';
import AboutUs from './components/Section/AboutUs';
import Comparation from './components/Section/Comparation';
import ItemListContainer from './components/Products/ItemListContainer';
import SearchContainer from './components/Products/SearchContainer';
import ProductDetails from './components/Products/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import BannerThree from './components/Section/BannerThree.jsx';
import Login from './components/Section/Login.jsx';
import Register from './components/Register/Register.jsx';
import PromoService from './components/Section/PromoService.jsx';
import PromoProducts from './components/Section/PromoProducts.jsx';
import ButtonChat from './components/Chatbot/ButtonChat.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <LoginProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={
                <><Carrusel /><ButtonChat /><Promo /><BannerThree /><Pricing /><PromoProducts/> <PromoService /><AppSection /><Team /><BannerTwo /><Footer /></>
              } />
              <Route path='/servicios' element={
                <><Pricing /><ButtonChat /><Comparation />  <AppSection /><Footer /></>
              } />
              <Route path='/checkout' element={
                <><Checkout /><Footer /></>
              } />
              <Route path='/checkout/:price/:name' element={
                <><Checkout /> <Footer /></>
              } />
              <Route path='/cart' element={
                <><Cart /><ButtonChat /><Footer /></>
              } />
              <Route path='/login' element={
                <><Login /><Footer /></>
              } />
              <Route path='/register' element={
                <><Register /><Footer /></>
              } />
              <Route path='/productos' element={
                <><ItemListContainer /><ButtonChat /><Footer /></>
              } />
              <Route path='/productos/:categoria' element={
                <><ItemListContainer /><ButtonChat /><Footer /></>
              } />
              <Route path='/producto/:producto' element={
                <><ProductDetails /><ButtonChat /><Footer /></>
              } />
              <Route path='/search/:busqueda?' element={
                <><SearchContainer /><ButtonChat /><Footer /></>
              } />
              <Route path='/nosotros' element={
                <><AboutUs /><Team /><ButtonChat /><Contacto /><Footer /></>
              } />
              <Route path='*' element={
                <><NoFound /></>
              } />
            </Routes>
          </LoginProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;