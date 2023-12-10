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

    useEffect(() => {
        fetch("http://localhost:5000/cardCollection")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)

    return (
        <div className="">
            <HeroSlider/>
           <div className=" lg:mx-5">
            <OurCollection/>
           <Card />
           <EndSection/>
           <ImageHoverEffect/>
           <ProductCard data={data?.slice(6,14)} key={data._id}/>
           <ShowCase/>
           <ProductCard data={data?.slice(12,20)} key={data._id}/>
           <BannerSlider />
           <EndSection/>
           <ImageHoverEffect/>
           <ProductCard data={data?.slice(6,14)} key={data._id}/>
           <Review/>
           </div>
        </div>
    );
};

export default Home;