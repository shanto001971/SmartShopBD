import { GrLineChart } from "react-icons/gr";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { GiSellCard } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"

const SellerDashboard = () => {
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="lg:flex gap-4">
            <div className="w-full h-screen">
                <div className="lg:flex gap-4 w-full lg:h-[50%]">
                    <div className="w-full  bg-slate-700 rounded-2xl ">
                        <div className="hidden lg:block">
                            <ComposedChart width={566} height={310} data={data}>
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <CartesianGrid stroke="#f5f5f5" />
                                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                            </ComposedChart>
                        </div>

                        <div className="block lg:hidden">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}


                                modules={[Autoplay, Pagination]}
                                className="mySwiper "
                            >
                                <SwiperSlide><img className='' src="https://i.ibb.co/wpdWpkk/www-smart-Shop-BD-com-1.png" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://i.ibb.co/wpXtcsC/www-smart-Shop-BD-com-2.png" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://i.ibb.co/JxD9LW8/www-smart-Shop-BD-com.png" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/b19bf92b-370f-4b47-8b61-a1fd0a677435.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/e109f454-777e-435c-b969-9cf2f6554c50.jpg_1200x1200.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/faa1e999-286a-417f-8ab2-33f7139cea72.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/84005469-c11c-46ca-aeea-da25653d826e.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/bd008108-7650-4580-ac14-53de59bf3cfc.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/4c300620-38e8-4e22-b6d9-e8908c1f1a9c.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/50ed2b29-27a1-4268-9d56-ab545bc63510.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/cb5dc320-3da8-4446-94ab-9f4a7d11ffc7.jpg" alt="Shoes" /></SwiperSlide>
                                <SwiperSlide><img className='' src="https://icms-image.slatic.net/images/ims-web/e109f454-777e-435c-b969-9cf2f6554c50.jpg_1200x1200.jpg" alt="Shoes" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="lg:w-[40%]  rounded-2xl mt-5 lg:mt-0">
                        <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-2xl text-center p-3 flex justify-center items-center gap-3">
                            <GiSellCard className="w-10 h-10" />
                            <div className="">
                                <h1 className="font-semibold">Total sell</h1>
                                <h3 className="font-bold text-2xl"> = 3.5k</h3>
                            </div>
                        </div>
                        <div className="w-full h-[70%] bg-gradient-to-r from-yellow-500 to-pink-500 rounded-b-2xl mt-4">
                            <div className="flex justify-center items-center w-full h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-b-2xl">
                                <h1 className="flex justify-center items-center font-semibold"><MdOutlineAttachMoney className="w-8 h-8" /> Total Earn = 565000K</h1>
                            </div>

                            <div className="flex justify-evenly items-center">
                                <div className="p-5 mt-10">
                                    <p className="">Total Time</p>
                                    <h1 className="font-bold">748 hr</h1>
                                    <p className="">Fab</p>
                                </div>
                                <FiArrowRightCircle className="w-5 h-5 mt-8" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:flex gap-3 p-5 mt-5">

                    <div className="  bg-base-100 shadow-xl rounded-2xl relative">
                        <figure><img className="rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                        <div className="w-12 h-12 bg-slate-700 rounded-full absolute -top-6 left-[40%] border flex justify-center items-center">
                            <GrLineChart className="w-full text-green-600" />

                        </div>
                    </div>
                    <div className="  bg-base-100 shadow-xl rounded-2xl relative">
                        <figure><img className="rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                        <div className="w-12 h-12 bg-slate-700 rounded-full absolute -top-6 left-[40%] border flex justify-center items-center">
                            <GrLineChart className="w-full text-green-600" />

                        </div>
                    </div>
                    <div className="  bg-base-100 shadow-xl rounded-2xl relative">
                        <figure><img className="rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                        <div className="w-12 h-12 bg-slate-700 rounded-full absolute -top-6 left-[40%] border flex justify-center items-center">
                            <GrLineChart className="w-full text-green-600" />

                        </div>
                    </div>


                </div>

            </div>
            <div className="bg-green-500 w-full lg:w-[30%] rounded-2xl hidden lg:block">
                qrwe
            </div>
        </div>
    );
};

export default SellerDashboard;