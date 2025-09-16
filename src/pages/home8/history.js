import { Col, Container, Row } from 'react-bootstrap';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ClientLogo from '../../component/client-logo';
import { ClientLogoList2 } from '../../data/client-logo-list';

// External images for history section
const AwardIMG = 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
const SectionBG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';

import BgVideo from '../../assets/video/video.mp4';

function History(props) {
  return (
    <>
      <section className="section-pt">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="border border-radius p-5 p-md-4 h-100">
                <span className="display-4 text-primary mb-3 d-block">
                  1500+
                </span>
                <h4 className="">Successfully completed projects</h4>
              </div>
            </Col>
            <Col lg={5} md={6} className="mb-4">
              <div className="h-100 border-radius d-flex text-center align-items-end bg-overlay-black-10 position-relative">
                <video className="video" autoPlay="autoPlay" loop="loop" muted>
                  <source src={BgVideo} />
                </video>
                <span className="text-stroke-white fw-bold font-xlll video-text">
                  Working at 55 Systems
                </span>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="bg-primary border-radius p-5 p-md-4 h-100">
                <div className="d-flex align-items-center">
                  <span className="pe-4 pt-1 display-4 text-white">36</span>
                  <h5 className="mb-0 text-white">Qualified employees</h5>
                </div>
                <p className="text-white mt-3">
                  Work with our leaders and the hard-working personalities who
                  deliver innovative concepts to corporations like yours.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div
                className="h-100 bg-overlay-secondary overlay-60 border-radius p-4 pt-5"
                style={{
                  backgroundImage: `url(${SectionBG})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="position-relative text-center pt-4">
                  <ul className="list-unstyled list-inline text-white pt-4">
                    <li className="list-inline-item me-1 font-xl text-warning">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item me-1 font-xl text-warning">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item me-1 font-xl text-warning">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item me-1 font-xl text-warning">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item me-1 font-xl text-warning">
                      <i className="fas fa-star-half"></i>
                    </li>
                  </ul>
                  <h5 className="mb-0 text-white">
                    Rated 4.80 out of 5 based on over{' '}
                    <span className="text-primary"> 1000 reviews</span>
                  </h5>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} className="mb-4 mb-md-0">
              <div className="h-100 text-center pt-4 pt-lg-5 px-4">
                <h5 className="mb-1">Award-winning solution</h5>
                <img className="img-fluid" src={AwardIMG} alt="" />
                <p>We've got a few awards thanks to our amazing clients.</p>
              </div>
            </Col>
            <Col lg={3} md={4} className="mb-4 mb-md-0">
              <div className="h-100 bg-secondary text-center p-5 p-md-4 border-radius">
                <span className="display-4 text-primary">256+</span>
                <h5 className="text-white">Clients around the globe</h5>
                <div className="our-clients-main mt-4">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    breakpoints={{
                      0: {
                        slidesPerView: 1, // This is 574 to 0 View
                      },
                      575: {
                        slidesPerView: 1, // This is 767 to 575 View
                      },
                      768: {
                        slidesPerView: 1, // This is 992 to 768 View
                      },
                      992: {
                        slidesPerView: 1, // This is 1099 to 992 View
                      },
                      1200: {
                        slidesPerView: 1, // This is Desktop to 1200 View
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
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="bg-light h-100 pt-md-0 pt-5 border-radius d-flex align-items-end ps-4 pb-4">
                <h5 className="mb-0">
                  We're <br /> epic <br /> since{' '}
                  <span className="d-block display-2 fw-bold text-stroke-primary">
                    2002
                  </span>{' '}
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default History;
