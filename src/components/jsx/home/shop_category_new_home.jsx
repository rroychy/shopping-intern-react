import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../css/home/shop_category_new_home.css';
function Shop_Category_new(){
    return (
        <div className='heading'>
            <div className='inner-content'>
                <h1>Shop by Category</h1>
                <div className='swiper-slide'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={5}
                    navigation={true}
                    loop={false}
                    className='category-swiper'
                    breakpoints={{
                        0:{
                            slidesPerView:2,
                            centeredSlides:false,
                            centeredSlidesBounds:true,
                        },
                        640:{
                            slidesPerView:2,
                        },
                        768:{
                            slidesPerView:2,
                        },
                        1024:{
                            slidesPerView:4,
                        },
                        1440:{
                            slidesPerView:6,
                        }
                    }}>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/1_Slide.png" alt="slideshow_1"/>
                        <p className='caption'>Bagh Printed Kurtas</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/3_Slide.png" alt="slideshow_2"/>
                        <p className='caption'>Katha Collection</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/4_Slide.png" alt="slideshow_3"/>
                        <p className='caption'>Sanganeri Collection</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/5_Slide.png" alt="slideshow_4"/>
                        <p className='caption'>Bagru Collection</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/6_Slide.png" alt="slideshow_5"/>
                        <p className='caption'>Kota Collection</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-img'>
                        <img src="/assets/picture/7_Slide.png" alt="slideshow_6"/>
                        <p className='caption'>Akola Printed Kurtas</p>
                    </div>
                </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Shop_Category_new;