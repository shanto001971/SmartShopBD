import BannerSlider from "../BannerSlider/BannerSlider";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Home = () => {
    return (
        <div className="bg-black -my-20 text-white">
           <div className="my-28 lg:mx-10">
           <BannerSlider/>
           </div>
        </div>
    );
};

export default Home;