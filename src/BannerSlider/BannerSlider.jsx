import { CiBookmark } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";




const BannerSlider = ({ productData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const dataRef = useRef({});

    const generateRandomGradient = () => {
        const angle = Math.floor(Math.random() * 360);
        const colors = Array.from({ length: 3 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
        return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    };

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
        setBackgroundColor(generateRandomGradient());
    };
    const [backgroundColor, setBackgroundColor] = useState(generateRandomGradient());


    const handleImageData = (item) => {
        dataRef.current = item;
        // console.log(dataRef.current);
    };

   console.log(dataRef.current.productTitle)


    return (
        <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)', background: backgroundColor, backdropFilter: 'blur(50px)' }} className="lg:flex justify-between mt-10 rounded-md ">
            <div className="flex flex-col lg:gap-4  px-5 lg:mt-32 text-white">
                <h1 className="lg:text-4xl text-base uppercase font-bold">{dataRef.current.productTitle}</h1>
                <p>High-quality Nike shoes with excellent comfort and durability.
                    <br />
                    Stylish design and advanced technology make them perfect for
                    <br />
                    both athletic activities and casual wear. A bit pricey,  but  the   investment  is
                    <br />
                    worth it for the overall performance and style.
                </p>
                <div className="lg:flex items-center gap-3">
                    <p className="lg:text-2xl lg:mt-3">Price: 3000 <del className="lg:text-lg">Tk: 3,800</del></p>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#FED900"
                    />
                </div>

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

            </div>

            <div className="lg:w-[50%] mt-10 lg:mt-0 ">
                <Carousel className="w-[80%] h-[60%]" onChange={handleImageChange} selectedItem={currentImageIndex}>
                    {productData?.slice(16,).map(singleData => (
                        <div key={singleData?._id} className="bg-yellow-500 bg-opacity-40 rounded-full w-[80%] h-[60%] mx-auto">
                            <img onClick={()=>handleImageData(singleData)} className="rounded-full" src={singleData?.productsImage} />
                        </div>
                    ))}
                </Carousel>
                {/* <div className="w-21 border absolute top-24 right-5 overflow-hidden hidden lg:block text-white">
                    <div className="p-2 border">38</div>
                    <div className="p-2 border">39</div>
                    <div className="p-2 border bg-slate-100 text-black">40</div>
                    <div className="p-2 border">41</div>
                </div> */}
            </div>
        </div>
    );
};

export default BannerSlider;