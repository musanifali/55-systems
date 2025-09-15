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
import BannerImg1 from '../../assets/images/banner/banner-img7.webp';
import BannerImg2 from '../../assets/images/banner/banner-img8.webp';
import { Col, Row } from 'react-bootstrap';

function Slider() {
  return (
    <>
      <section className="banner-section banner-slider banner-slider09">
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
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${BannerImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Row>
              <Col sm={9} lg={6} className="pt-5">
                <div className="banner-content text-start">
                  <h1 className="fw-bold display-2 text-white">
                    Interesting,{' '}
                    <span className="bg-primary px-2 border-radius">
                      Relevant
                    </span>
                    & Different
                  </h1>
                  <p className="text-white">
                    We design brand experiences that help enterprising
                    nonprofits & organizations grow their impact.
                  </p>
                  <div className="d-flex mt-5">
                    <h4 className="text-primary">letstalk@hisoft.com</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </SwiperSlide>

          <SwiperSlide
            key="2"
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${BannerImg2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="banner-item row">
              <div className="banner-content text-start">
                <h1 className="font-large text-white">
                  <span className="text-primary">Transforming </span> technology
                  divisions into possibilities
                </h1>
                <h6>Award-Winning website design & creative digital agency</h6>

                <Link
                  className="btn btn-primary-round btn-round text-white"
                  to="/about-us"
                >
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
