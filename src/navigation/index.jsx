import { BrowserRouter , Route,Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register/index";
 import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
const Navigation=()=>{
    const productsInCart = useSelector(cartProducts);
    return(
        <BrowserRouter>
        <Header cartCount={productsInCart ? productsInCart.length : 0}/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default Navigation;