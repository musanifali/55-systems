import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Site Data
// External banner images for home2
const BannerImg1 = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80';
const BannerImg2 = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';

function Slider() {
  return (
    <>
      <section className="banner-section banner-slider">
        <Swiper
          className="mySwiper swiper-slider-light h-100"
          modules={[Navigation, A11y]}
          navigation
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
        >
          <SwiperSlide
            key="1"
            className="d-flex justify-content-center align-items-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <h2 className="title">
                  <span className="text-stroke-white ">Extra Flexible</span>
                  <span className="font-large">Unique Design</span>
                </h2>
                <h6>A totally new way to grow your business</h6>
                <Link className="btn-secondary" to="/about-us">
                  Get Started Now <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            key="2"
            className="d-flex justify-content-center align-items-center bg-overlay-secondary overlay-30"
            style={{
              backgroundImage: `url(${BannerImg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item">
              <div className="banner-content">
                <h2 className="title">
                  <span className="text-stroke-white ">We Are Digital</span>
                  <span className="font-large">Creative Agency</span>
                </h2>
                <h6>Award-Winning website design & creative digital agency</h6>
                <Link className="btn-secondary" to="/about-us">
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
