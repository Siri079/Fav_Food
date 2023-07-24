import aboutImage from "../../src/assets/images/about-image.png";
export const About = () => {
    return (
        <div className="bg-white">
        <div className="p-24 grid grid-cols-2">
             <div className="">
                  <h2 className="text-2xl font-medium"><strong>About Fav Food</strong></h2>
                  <p className="text-lg">Welcome to Fav Food, the premier online food ordering website that brings convenience and delectable flavors right to your fingertips. With a user-friendly interface and an extensive selection of food , Fav Food is your one-stop destination for satisfying your culinary cravings.</p><br></br>
                  <p className="text-lg">Our platform is designed to cater to all tastes and dietary preferences, ensuring that there's something delicious for everyone.</p>
             </div>
             <div className="flex items-center justify-center">
                <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover"/>
             </div>

        </div>
            
        </div>
    );
}