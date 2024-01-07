import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const OurCollection = ({ productData }) => {
    return (
        <div className="">
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
                {
                    productData?.slice(16,26).map(singleData => (<SwiperSlide key={singleData._id}>
                        <Link to={`/CategoryPage/${singleData?.category}`}>
                            <div className="overflow-hidden rounded-full my-5 relative">

                                <img
                                    className="className=' rounded-full  transform transition-transform hover:scale-125"
                                    alt="Your Image"
                                    src={singleData?.productsImage}
                                />
                            </div>
                        </Link>
                    </SwiperSlide>))
                }
            </Swiper>


        </div>
    );
};

export default OurCollection;