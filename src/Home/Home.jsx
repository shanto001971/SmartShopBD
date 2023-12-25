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
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://smart-shop-bd-server-side.vercel.app/cardCollection")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // https://smart-shop-bd-server-side.vercel.app
    // https://smart-shop-bd-server-side.vercel.app

    useEffect(() => {
        fetch("CardInfo.json")
            .then(res => res.json())
            .then(data => {
                setProductData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    // console.log(productData)

    return (
        <div className="">

            <HeroSlider />
            <div className=" lg:mx-5">
                <OurCollection />
                <Card productData={data} />
                <EndSection productData={productData} loading={loading} />
                <ImageHoverEffect />
                <ProductCard data={data?.slice(0, 8)} key={data._id} />
                <ShowCase />
                <ProductCard data={data?.slice(12, 20)} key={data._id} />
                <BannerSlider />
                <EndSection productData={data?.slice(8, 14)} loading={loading} />
                <ImageHoverEffect />
                <ProductCard data={data?.slice(6, 14)} key={data._id} />
                <Review />
            </div>
        </div>
    );
};

export default Home;