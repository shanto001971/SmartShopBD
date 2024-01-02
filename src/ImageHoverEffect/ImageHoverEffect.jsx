
import { useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageMagnify from 'react-image-magnify';
import "./ImageHoverEffect.css"

const ImageHoverEffect = () => {
    const [quantity, setQuantity] = useState(1);
    const [shoesColor, setShoesColor] = useState("White");
    const zoomedAreaRef = useRef(null);


    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    setMousePosition({ x, y });
  };

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };


    // console.log(imageWidth)
    const image = "https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-1661870227.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"


    return (
        <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="mt-5 lg:flex justify-center gap-3 lg:p-4 border rounded lg:my-">
            <div className="">
                {/* <Zoom className="rounded-md" img="https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-1661870227.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" zoomScale={3} width={600} height={600} /> */}
                <img className="rounded-md w-full" src="https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-1661870227.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" alt="" />
                <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: image,
            },
            largeImage: {
              src: image,
              width: 1200,
              height: 1800,
            },
            lensStyle: { backgroundColor: 'rgba(0,0,0,0.6)' },
            lensBorderSize: 1,
            lensBorderRadius: 0,
            hoverDelayInMs: 200,
          }}
        />

            </div>



            <div className="lg:flex flex-col gap-3 px-2 lg:px-0">
                <h1 className="lg:text-3xl font-medium">Stride in Style: Comfortable and Trendy Footwear for Every Occasion - Shop Now for the Perfect Pair!</h1>
                <p className="bg-red-600 px-1 w-20 rounded text-white">Save 40%</p>
                <div className="">
                    <p className="font-semibold">Smart shoes shop</p>
                    <p className="flex items-center gap-2">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#FED900"
                        />
                        4 reviews
                    </p>
                </div>

                <hr />

                <div className="">
                    <h3 className="lg:text-xl font-semibold">
                        Color Family: <span className="lg:text-xl font-semibold">{shoesColor}</span>
                    </h3>
                    <div className="flex gap-2 mt-2">
                        <div onClick={() => setShoesColor("White")} className="p-3 bg-white border border-red-500 w-10"></div>
                        <div onClick={() => setShoesColor("Black")} className="p-3 bg-black border border-red-500 w-10"></div>
                        <div onClick={() => setShoesColor("Yellow")} className="p-3 bg-amber-300 border border-red-500 w-10"></div>
                    </div>
                    <p className="text-2xl">Price: 3000 <del className="text-lg">Tk: 3,800</del></p>
                    <div className=" border w-44 p-[10px] flex my-1">
                        <button className="px-5" onClick={decrementQuantity}>-</button>
                        <span className="px-6  ">{quantity}</span>
                        <button className="px-5 " onClick={incrementQuantity}>+</button>
                    </div>
                    <div className="w-full  lg:flex items-center justify-center gap-2 ">
                        <button className="w-full lg:w-[50%] bg-[#EA33B6] p-2 rounded text-white">Add to cart</button>
                        <button className="w-full mt-2 lg:w-[50%] bg-[#3A2A2F] p-2 rounded text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageHoverEffect;