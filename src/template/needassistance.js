import { Col, Container, Row } from 'react-bootstrap';
import Googlemap from '../component/GoogleMap/googlemap';
import SocialInfo from '../widget/social-info/social-info';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ClientLogo from '../component/client-logo';
import { ClientLogoList2 } from '../data/client-logo-list';
import { NeedAssistanceForm } from '../form/get-touch-form';

function NeedAssistance(props) {
  return (
    <>
      <section className={`section bg-primary pt-0 pt-lg-5 ${props.className || ''}`}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className="bg-white shadow-lg p-4 p-sm-5 border-radius assistance-form">
                <Row>
                  <Col lg={8} className="mb-4 mb-lg-0">
                    <h3>Need assistance? please fill the form</h3>
                    <NeedAssistanceForm />
                  </Col>
                  <Col lg={4}>
                    <Googlemap
                      className=" h-[100%] p-0 md:h-[450px] xs:h-[300px]"
                      location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821917424!2d144.956054!3d-37.817127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1427947693651"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="d-flex justify-content-start align-items-center">
                <ul className="list-unstyled list-inline me-4 mb-0">
                  <li className="list-inline-item me-1 font-md  align-items-center">
                    <b className="font-xl text-white">5</b>
                    <i className="fas fa-star text-warning"></i>
                  </li>
                </ul>
                <h6 className="mb-0 text-white">
                  Rated 4.80 out of 5 based on over
                  <span className="text-white"> 1000+ reviews</span>
                </h6>
              </div>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-end">
              <SocialInfo
                className="d-inline-block text-white"
                theme="light"
                gap="40"
              />
            </Col>
            <Col lg={12}>
              <div className="our-clients-main mt-5">
                <Swiper
                  modules={[A11y]}
                  spaceBetween={30}
                  slidesPerView={5}
                  breakpoints={{
                    0: {
                      slidesPerView: 2, // This is 574 to 0 View
                    },
                    575: {
                      slidesPerView: 2, // This is 767 to 575 View
                    },
                    768: {
                      slidesPerView: 4, // This is 992 to 768 View
                    },
                    992: {
                      slidesPerView: 5, // This is 1099 to 992 View
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

export default NeedAssistance;
