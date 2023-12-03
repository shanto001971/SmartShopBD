import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSlider.css';


const HeroSlider = () => {

    return (
        <div className=''>
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
                className="mySwiper"
            >
                <SwiperSlide><img className='' src="https://i.ibb.co/wpdWpkk/www-smart-Shop-BD-com-1.png" alt="Shoes" /></SwiperSlide>
                <SwiperSlide><img className='' src="https://i.ibb.co/wpXtcsC/www-smart-Shop-BD-com-2.png" alt="Shoes" /></SwiperSlide>
                <SwiperSlide><img className='' src="https://i.ibb.co/JxD9LW8/www-smart-Shop-BD-com.png" alt="Shoes" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default HeroSlider;