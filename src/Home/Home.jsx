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
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true);

    // https://smart-shop-bd.vercel.app

    useEffect(() => {
        fetch("http://localhost:5000/cardCollection")
            .then(res => res.json())
            .then(data => {
                setProductData(data)
                setLoading(false);
            })

            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [])

    // https://smart-shop-bd.vercel.app

    // console.log(data)

    return (
        <div className="">
            <div className="">
                <div className="hidden lg:block">
                    <BannerSlider productData={productData} />
                </div>
                <div className="block lg:hidden">
                    <HeroSlider />
                </div>
            </div>

            <div className=" lg:mx-5">
                <OurCollection productData={productData} />
                <Card productData={productData} />
                <EndSection productData={productData?.slice(5, 9)} loading={loading} />
                <ImageHoverEffect productData={productData?.slice(7,)} loading={loading} />
                <ProductCard data={productData?.slice(0, 12)}/>
                <ShowCase data={productData} />
                <ProductCard data={productData?.slice(13,)}/>
                <HeroSlider />
                <EndSection productData={productData?.slice(8, 14)} loading={loading} />
                <ImageHoverEffect productData={productData?.slice(14,)} loading={loading} />
                <ProductCard data={productData?.slice(14,)} />
                <Review />
            </div>
        </div>
    );
};

export default Home;