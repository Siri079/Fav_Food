import Button from "./elements/Button";
import 'react-toastify/dist/ReactToastify.css';
export const Banner =()=>{
    return (
        <div className="banner bg-white w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
            <h2 className="mb-6 text-4xl font-bold text-black">
            Order your favorite food from our menu
            </h2>
            <p className="font-semibold text-lg text-red-600 py-2">
                Get started before it's too late!!
            </p>
            <div className="btn-container">
             <Button >Order Now</Button>
             <a href="/menu" className="text-red-600 hover:text-blue-900 text-decoration-line px-3 text-lg">
                <strong>See Menu</strong>
             </a>

            </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                  <img src={require("../assets/images/pizza-banner.jpeg")} alt="banner" className="max-h-95 text-white"/>

            </div>
        </div>
    )
}
