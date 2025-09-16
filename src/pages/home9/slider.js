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
// External banner images for home9 slider
const BannerImg1 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2315&q=80';
const BannerImg2 = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
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
                    <h4 className="text-primary">letstalk@55systems.com</h4>
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
