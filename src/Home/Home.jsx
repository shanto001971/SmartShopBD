import BannerSlider from "../BannerSlider/BannerSlider";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from "../CardSection/Card";
import ImageHoverEffect from "../ImageHoverEffect/ImageHoverEffect";
import ProductCard from "../ProductCard/ProductCard";
import ShowCase from "../ShowCaseSection/ShowCase";
import Review from "../ReviewSection/Review";
import HeroSlider from "../HeroSection/HeroSlider";
import OurCollection from "../OurCollectionSection/OurCollection";
import EndSection from "../EndSection/EndSection";


const Home = () => {
    return (
        <div className="">
            <HeroSlider/>
           <div className=" lg:mx-5">
            <OurCollection/>
           <Card/>
           <EndSection/>
           <ImageHoverEffect/>
           <ProductCard/>
           <ShowCase/>
           <ProductCard/>
           <BannerSlider/>
           <EndSection/>
           <ImageHoverEffect/>
           <Review/>
           </div>
        </div>
    );
};

export default Home;