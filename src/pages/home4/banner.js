import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Components
import ClientLogo from '../../component/client-logo';
import Button from '../../component/button/button';

// Site Data
import { ClientLogoList2 } from '../../data/client-logo-list';
import BannerImg1 from '../../assets/images/banner/banner-img6.webp';

// SCSS

function Banner() {
  return (
    <>
      <section
        className="d-flex align-items-center overlay-home-banner section-ptb bg-overlay-secondary overlay-70"
        style={{
          backgroundImage: `url(${BannerImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container>
          <Row>
            <Col
              xl={8}
              lg={10}
              className="position-relative banner-content text-start"
            >
              <h1>
                <span className="text-stroke-white ">If you can dream it</span>{' '}
                <span className="font-large text-white">you can do it</span>
              </h1>
              <h6 className="text-white">
                It's easy when you're doing something you love
              </h6>
              <Button
                btnClass="btn-light"
                btnText="Discover More"
                btnURL="/about-us"
              />

              <div className="our-clients-main mt-5 pt-5">
                <Swiper
                  modules={[A11y]}
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 2, // This is 574 to 0 View
                    },
                    575: {
                      slidesPerView: 3, // This is 767 to 575 View
                    },
                    768: {
                      slidesPerView: 4, // This is 992 to 768 View
                    },
                    992: {
                      slidesPerView: 3, // This is 1099 to 992 View
                    },
                    1200: {
                      slidesPerView: 5, // This is Desktop to 1200 View
                    },
                  }}
                >
                  {ClientLogoList2.map((val, ind) => {
                    return (
                      <SwiperSlide key={ind}>
                        <ClientLogo
                          key={ind}
                          className="cl-size-sm"
                          theme="logo-light"
                          data={val.imgSrc}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
