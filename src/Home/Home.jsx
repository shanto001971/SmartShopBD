import BannerSlider from "../BannerSlider/BannerSlider";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageHoverEffect from "../ImageHoverEffect/ImageHoverEffect";
import ShowCase from "../ShowCaseSection/ShowCase";
import Review from "../ReviewSection/Review";
import HeroSlider from "../HeroSection/HeroSlider";
import OurCollection from "../OurCollectionSection/OurCollection";
import EndSection from "../EndSection/EndSection";
import Card from "../Components/CardSection/Card";
import ProductCard from "../Components/ProductCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";




const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://localhost:5000/cardCollection")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false);
            })
                
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [])

    // http://localhost:5000
    // https://smart-shop-bd-server-side.vercel.app


    return (
        <div className="">
            <BannerSlider productData={data}  />
            <div className=" lg:mx-5">
                <OurCollection productData={data} />
                <Card productData={data} />
                <EndSection productData={data?.slice(5, 9)} loading={loading} />
                <ImageHoverEffect productData={data?.slice(20, )} loading={loading} />
                <ProductCard data={data?.slice(0, 12)} key={data._id} />
                <ShowCase data={data} />
                <ProductCard data={data?.slice(13, )} key={data._id} />
                <HeroSlider />
                <EndSection productData={data?.slice(8, 14)} loading={loading} />
                <ImageHoverEffect productData={data?.slice(14, )} loading={loading} />
                <ProductCard data={data?.slice(14, )} key={data._id} />
                <Review />
            </div>
        </div>
    );
};

export default Home;