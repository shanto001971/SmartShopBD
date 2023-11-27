import { CiBookmark } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";




const BannerSlider = () => {
    return (
        <div className="lg:flex justify-between lg:mt-5">
            <div className="flex flex-col gap-4 px-5 lg:mt-32">
                <h1 className="text-4xl uppercase font-bold">Air jordan 1 low</h1>
                <p>High-quality Nike shoes with excellent comfort and durability.
                    <br />
                    Stylish design and advanced technology make them perfect for
                    <br />
                    both athletic activities and casual wear. A bit pricey,  but  the   investment  is
                    <br />
                    worth it for the overall performance and style.
                </p>
                <div className="lg:flex items-center gap-3">
                <p className="font-semibold">Price: 1400 <span className="">Offer Price 1,200</span></p>
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

            <div className="lg:w-[50%] mt-10 lg:mt-0">
                <Carousel className="relative">
                    <div className="bg-yellow-500 bg-opacity-40 rounded-full w-[90%] mx-auto">
                        <img src="https://i.ibb.co/hHHTdm1/png-clipart-removebg-preview.png" />
                    </div>
                    <div className="bg-red-400 bg-opacity-40 rounded-full w-[90%] mx-auto">
                        <img src="https://i.ibb.co/hHHTdm1/png-clipart-removebg-preview.png" />
                    </div>
                    <div className="bg-blue-500 bg-opacity-40 rounded-full w-[90%] mx-auto">
                        <img src="https://i.ibb.co/hHHTdm1/png-clipart-removebg-preview.png" />
                    </div>


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