import { Button} from '@mui/material';
//import Button from "./elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AddProduct } from './AddProduct';
// import { CartProduct } from './CartProduct';
// import { AddProducts } from './AddProducts';

const ProductDetailCard =({product ,onAddProduct})=>{
    
    const addProduct = () => {
        onAddProduct(product);
    }
    return (
        <div className="p-4 m-4 rounded-lg bg-slate-50">
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-3xl">{product.name}</h2>
            <div className="flex  justify-between">
                 <div className="text-3xl text-black ">₹{product.price} </div>
                 
            </div>

        </div>
        <div className="w-full flex items-center justify-center">
             <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name}/>
        </div>
        <div className="w-full flex items-center justify-center ">
        
        <AddProduct onAddProduct={addProduct} />
        
        </div>
        
        </div>
    )
}

export default ProductDetailCard;
