import { useDispatch } from "react-redux"
import {incrementProductAmount,decrementProductAmount} from "../stores/cart/cartSlice";
export const ProductSummaryCard =({product})=>{
    const dispatch =useDispatch();
    return(
        <div className=" flex p-1 sm:p-2 border-b border-b-gray-200">
            <div className="product-image border border-grey-200 rounded-lg w-full sm:w-1/3">
                 <img className="rounded-3xl" src={product.imageUrl}/>
            </div>
            <div className="product-info m-1 p-2 text-2xl text-bold">
                 <h2 >{product.name} </h2>
            </div>
            <div className="product-price-qt flex flex-col items-center ">
                <div className="price text-xl text-bold">{`₹ ${product.price}`}</div>
                <div className="quantity flex">
                    <button className="p-1 text-xl" disabled={product.amount <=0 } onClick={()=> dispatch(decrementProductAmount(product))}>-</button>
                    <span className="p-1 text-xl"> {product.amount}</span>
                    <button className="p-1 text-xl" onClick={()=> dispatch(incrementProductAmount(product))}>+</button>
                </div>   
            </div>
        </div>
    )
}
