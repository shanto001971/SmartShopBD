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
    );
};

export default HeroSlider;