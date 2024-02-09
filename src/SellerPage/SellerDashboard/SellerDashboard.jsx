import { Area, Bar, CartesianGrid, ComposedChart, Line, Tooltip, XAxis } from "recharts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlinePhonelink } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { IoBagCheckOutline, IoHomeOutline } from "react-icons/io5";
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
        <div className="lg:flex gap-4 px-3">
            <div className="w-full">

                <div className="lg:stats shadow mx-auto my-5 w-full">

                    <div className="stat w-full">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Visitors</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat w-full">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat w-full">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>


                <div className="lg:flex gap-4 w-full ">
                    <div className="w-full rounded-2xl ">
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

                        <div className="block lg:hidden ">
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
                    <div className="lg:w-[40%] lg:flex-col rounded-2xl mt-5 lg:mt-0">
                        <div className="stat">
                            <div className="stat-title">Account balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-success">Add funds</button>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Current balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm">Withdrawal</button>
                                <button className="btn btn-sm">deposit</button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className=" shadow-2xl w-full p-3 mt-5">
                    <div className="w-full flex justify-between">
                        <h3 className="font-semibold">Recent Order</h3>
                        <small className="link text-blue-700">See More</small>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Products Name</th>
                                    <th>Status</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Xiaomi Mi 11 Ultra 64Gb</td>
                                    <td>Complete</td>
                                    <td>2</td>
                                    <td>25000 Tk</td>
                                </tr>
                                <tr>
                                    <td>Xiaomi Mi 11 Ultra 64Gb</td>
                                    <td>Complete</td>
                                    <td>2</td>
                                    <td>25000 Tk</td>
                                </tr>
                                <tr>
                                    <td>Xiaomi Mi 11 Ultra 64Gb</td>
                                    <td>Complete</td>
                                    <td>2</td>
                                    <td>25000 Tk</td>
                                </tr>
                                <tr>
                                    <td>Xiaomi Mi 11 Ultra 64Gb</td>
                                    <td>Complete</td>
                                    <td>2</td>
                                    <td>25000 Tk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div className=" w-full lg:w-[30%] rounded-2xl">
                <div className="stats shadow w-full  mt-5">
                    <div className="stat mx-auto">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">89,400</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                </div>

                <div className="mt-5 shadow-md p-5 rounded-2xl">
                    <p className="font-semibold my-">Top Category</p>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="bg-teal-500 p-3 rounded-full text-white">
                            <MdOutlinePhonelink />
                        </div>
                        <div className="">
                            <p className="font-semibold">HandPhone&Tablet</p>
                            <small className="text-xs">83K</small>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 ">
                        <div className="bg-orange-400 p-3 rounded-full text-white">
                            <FaShirt />
                        </div>
                        <div className="">
                            <p className="font-semibold">Fashion</p>
                            <small className="text-xs">133K</small>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="bg-cyan-600 p-3 rounded-full text-white">
                            <IoHomeOutline />
                        </div>
                        <div className="">
                            <p className="font-semibold">Home Furniture</p>
                            <small className="text-xs">53K</small>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="bg-orange-900 p-3 rounded-full text-white">
                            <IoBagCheckOutline />
                        </div>
                        <div className="">
                            <p className="font-semibold">Cosmetic&Jewelry</p>
                            <small className="text-xs">144K</small>
                        </div>
                    </div>
                </div>

                <div className="mt-5 shadow-md p-5 rounded-2xl">
                    <h1 className="font-medium">Customer List</h1>

                    <div className="flex gap-2 mt-2">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="">
                                <h4 className="font-semibold">Abram Vaccaro</h4>
                                <small>abram.vac@gmail.com</small>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="">
                                <h4 className="font-semibold">Abram Vaccaro</h4>
                                <small>abram.vac@gmail.com</small>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="">
                                <h4 className="font-semibold">Abram Vaccaro</h4>
                                <small>abram.vac@gmail.com</small>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="">
                                <h4 className="font-semibold">Abram Vaccaro</h4>
                                <small>abram.vac@gmail.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;