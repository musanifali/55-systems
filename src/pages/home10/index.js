import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import InfoBox from '../../component/infobox';
import ClientLogo from '../../component/client-logo';

// Site Data
import { AwardLogoList } from '../../data/client-logo-list';

// Template
import DigitalCreative from '../../template/digitalcreative';
import CompletedProjects from '../../template/completedprojects';
import CareersSectionTwo from '../../template/careers-sec-2';
import OurPortfolioSection from '../../template/our-portfolio';

// Page Section
import Banner from './banner';

function Home10() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          <Banner />

          <DigitalCreative />

          <section className="section-pb">
            <Container>
              <Row className="mt-4 mt-lg-0">
                <Col md={4} className="mb-4 mb-md-0">
                  <InfoBox
                    extraClass="center"
                    icon="flaticon-data"
                    title="Information Security"
                    description="Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come."
                  />
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <InfoBox
                    extraClass="center"
                    icon="flaticon-icon-149196"
                    title="Mobile Platforms"
                    description="We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success."
                  />
                </Col>
                <Col md={4}>
                  <InfoBox
                    extraClass="center"
                    icon="flaticon-group"
                    title="Content Management"
                    description="There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col lg={7} className="offset-lg-4">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={{
                      0: {
                        slidesPerView: 2, // This is 574 to 0 View
                      },
                      575: {
                        slidesPerView: 3, // This is 767 to 575 View
                      },
                      768: {
                        slidesPerView: 3, // This is 992 to 768 View
                      },
                      992: {
                        slidesPerView: 4, // This is 1099 to 992 View
                      },
                    }}
                  >
                    {AwardLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-md"
                            theme="logo-grayscale"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>

          <OurPortfolioSection />

          <CareersSectionTwo />

          <CompletedProjects />
        </div>
      </div>
    </>
  );
}
export default Home10;
