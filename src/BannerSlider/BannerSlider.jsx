import { CiBookmark } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const BannerSlider = ({ productData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [productTitle, setProductTitle] = useState("");
    const [oldPrice, setOldPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [product, setProduct] = useState({})

    // const generateRandomGradient = () => {
    //     const angle = Math.floor(Math.random() * 360);
    //     const colors = Array.from({ length: 3 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    //     return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    // };

    const handleImageChange = (index) => {
        // console.log(index)
        setCurrentImageIndex(index);
        // setBackgroundColor(generateRandomGradient());


        if (productData && productData.length > 0) {
            const selectedProduct = productData[index];
            setProductTitle(selectedProduct ? selectedProduct.productTitle : "");
            setOldPrice(selectedProduct ? selectedProduct.oldPrice : 0);
            setNewPrice(selectedProduct ? selectedProduct.newPrice : 0);
            setProduct(selectedProduct);
        }
    };
    // const [backgroundColor, setBackgroundColor] = useState(generateRandomGradient());

    useEffect(() => {
        // Set initial values based on the first index
        if (productData && productData.length > 0) {
            const initialProduct = productData[0];
            setProductTitle(initialProduct ? initialProduct.productTitle : "Default Title");
            setOldPrice(initialProduct ? initialProduct.oldPrice : 0);
            setNewPrice(initialProduct ? initialProduct.newPrice : 0);
            setProduct(initialProduct);
        }
    }, [productData]);

    // console.log(product)

    return (
        <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)', background: `url(${productData[currentImageIndex]?.productsImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(50px)',position: 'relative'}} className="lg:flex justify-between rounded-md">
            <div style={{ backdropFilter: 'blur(50px)', position: 'relative', zIndex: 1 }} className="lg:flex justify-between rounded-md p-5">
            <div className="flex flex-col lg:gap-4  px-5 lg:mt-32 ">
                <h1 className="lg:text-4xl text-base uppercase font-bold">{productTitle.slice(0, 46)}...</h1>
                <p>
                    {
                        product?.productDiscretion
                    }
                </p>
                <div className="lg:flex items-center gap-3">
                    <p className="lg:text-2xl lg:mt-3">Price: {newPrice} <del className="lg:text-lg">Tk: {oldPrice}</del></p>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#FED900"
                    />
                </div>

                <Link to={`/PlaceOrderPage/${product._id}`}>
                    <div className="flex items-center gap-3">
                        <button className="lg:w-[35%] inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                            <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                                <svg className="w-6 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </span>
                            <span className="pl-4 pr-5 py-2.5 uppercase">Buy Now</span>
                        </button>
                        <TiShoppingCart className="w-6 h-6" />
                        <CiBookmark className="w-6 h-6" />
                    </div>
                </Link>

            </div>

            <div className="lg:w-[50%] mt-10 lg:mt-0 mx-auto">
                <Carousel className="lg:w-[80%] lg:h-[60%]" onChange={handleImageChange} selectedItem={currentImageIndex}>
                    {productData?.slice(0, 10).map(singleData => (
                        <div key={singleData?._id} className=" bg-opacity-40 rounded-full w-[80%] h-[60%] mx-auto">
                            <img style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="rounded-full" src={singleData?.productsImage} />
                        </div>
                    ))}
                </Carousel>
            </div>
            </div>
        </div>
    );
};

export default BannerSlider;