import { Button} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const AddProduct=({ onAddProduct})=>{
    return(
        <div className="flex justify-end">
            <Button variant="outlined" onClick={onAddProduct}><ShoppingCartOutlinedIcon/><span>Add to Cart</span></Button>
        </div>
        //<Button  variant="outlined" onClick={onAddProduct}><ShoppingCartOutlinedIcon/><span>Add to Cart</span></Button>
    )
}