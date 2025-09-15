import { Col, Container, Row } from 'react-bootstrap';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Site Data
import { ClientLogoList2 } from '../../data/client-logo-list';
import ClientLogo from '../../component/client-logo';
const Social = [
  {
    id: 1,
    icon: 'fab fa-facebook-f',
  },
  {
    id: 2,
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    icon: 'fab fa-linkedin-in',
  },
];

// Use the provided primary hero image (800x873)
const HERO_IMAGE = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/banner-img5.62c2d41908482577a2d2.webp';

function Banner() {
  return (
    <>
      <section className="bg-primary overflow-hidden banner-08">
        <Container>
          <Row className="align-items-stretch">
            <Col
              sm={12}
              lg={6}
              className="offset-lg-1 d-none d-lg-block order-md-2"
            >
              <img src={HERO_IMAGE} alt="Banner" />
            </Col>
            <Col sm={12} lg={5} className="order-md-1 py-5">
              <h1 className="text-white pt-4">Live, Work, Create…</h1>
              <p className="text-white">
                Ten years plus experience helped us to create a process that
                guarantees high productivity and profitability for your
                solution.
              </p>
              <div className="d-flex mt-5">
                <h4>+(704) 279-1249</h4>
                <ul className="list-unstyled social-list ms-4 ms-sm-5">
                  {Social.map((list, index) => (
                    <li key={index}>
                      <a className="text-white" href="#">
                        <i className={list.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="our-clients-main my-4">
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
                      slidesPerView: 3, // This is 992 to 768 View
                    },
                    992: {
                      slidesPerView: 3, // This is 1099 to 992 View
                    },
                    1200: {
                      slidesPerView: 3, // This is Desktop to 1200 View
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
