import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const OurCollection = () => {
    return (
        <div className="lg:py-5">

            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="overflow-hidden rounded-full my-5 relative">

                        <img
                            className="className=' rounded-full  transform transition-transform hover:scale-125"
                            alt="Your Image"
                            src="https://gsmartbd.com/cdn/shop/collections/Earbuds_300x.jpg?v=1687344642"
                        />
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overflow-hidden rounded-full my-5 relative">

                        <img
                            className="className=' rounded-full  transform transition-transform hover:scale-125"
                            alt="Your Image"
                            src="https://gsmartbd.com/cdn/shop/collections/Earphones_300x.jpg?v=1687344633"
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overflow-hidden rounded-full my-5 relative">

                        <img
                            className="className=' rounded-full  transform transition-transform hover:scale-125"
                            alt="Your Image"
                            src="https://gsmartbd.com/cdn/shop/collections/Gadgets_300x.jpg?v=1687344628"
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overflow-hidden rounded-full my-5 relative">

                        <img
                            className="className=' rounded-full  transform transition-transform hover:scale-125"
                            alt="Your Image"
                            src="https://gsmartbd.com/cdn/shop/collections/render-diamond-crown-expensive-grind_300x.jpg?v=1687344623"
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overflow-hidden rounded-full my-5 relative">

                        <img
                            className="className=' rounded-full  transform transition-transform hover:scale-125"
                            alt="Your Image"
                            src="https://gsmartbd.com/cdn/shop/collections/businessman-checking-time_300x.jpg?v=1687344619"
                        />

                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default OurCollection;