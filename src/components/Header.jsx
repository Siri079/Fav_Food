
import {default as  newlogo2} from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useState,useEffect } from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export const Header=({ cartCount })=>{
    const navigate=useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }
        window.addEventListener('storage', checkAuthToken);
        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    },[])
    return(
        <nav id="header"  className="h-30 text-white">
            <div className="w-full h-30 container  flex flex-wrap items-center justify-between ">
            <div className="logo-wrapper pl-2 flex items-center">
            <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={newlogo2} alt="Fav Food" className="w-25 h-25 object-cover" /><span className="text-black">Fav Food</span>
            </Link>
            </div>
            <div className="nav-menu-wrapper flex items-center justify-between space-x-5">
                
                <Link to="/" className="text-xl "> <strong>Home</strong></Link>
                <Link to="/about" className="text-xl"><strong>Blog</strong></Link>
            </div>
            <div className="flex items-center justify-center space-x-5">
                  <Link to="/cart" className="mr-4 relative" >
                    <strong><ShoppingBagOutlinedIcon/></strong>
                    {cartCount !== 0 ? <div className="rounded-xl bg-black text-white inline-flex justify-center items-center w-full absolute -top-3 -right-4">{cartCount}</div> : null}
                  </Link>
                  {
                    isLoggedIn ? 
                        <Button onClick={handleLogout}>Log Out</Button> : 
                        (
                            <>
                             <Link to="/login"><strong>Log In</strong></Link>
                             <Link to="/register"><strong>Register</strong></Link>
                            </>
                        )
                  }

            </div>
            </div>
        </nav>
    )
}
