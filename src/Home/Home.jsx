import BannerSlider from "../BannerSlider/BannerSlider";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from "../CardSection/Card";
import ImageHoverEffect from "../ImageHoverEffect/ImageHoverEffect";
import ProductCard from "../ProductCard/ProductCard";
import ShowCase from "../ShowCaseSection/ShowCase";
import Review from "../ReviewSection/Review";


const Home = () => {
    return (
        <div className="">
           <div className=" lg:mx-5">
           <BannerSlider/>
           <Card/>
           <ImageHoverEffect/>
           <ImageHoverEffect/>
           <ProductCard/>
           <ShowCase/>
           <ProductCard/>
           <Review/>
           </div>
        </div>
    );
};

export default Home;