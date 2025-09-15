import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import SectionTitle from '../../component/section-title/section-title';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import ActionBox from '../../component/action-box';

// Template
import DigitalStrategy2 from '../../template/digital-strategy-2';
import SearchEngineOptimization2 from '../../template/search-engine-optimization-2';
import ECommerceSolution2 from '../../template/e-commerce-solution-2';
import WebsiteDevelopment2 from '../../template/website-development-2';
import AboutProject2 from '../../template/about-project-2';

// Site Data
import TestimonialList from '../../data/testimonial-list';

// Page Section
import Banner from './banner';

import History from './history';
import StrategySection from '../../template/strategy-section';

function Home8() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          <Banner />

          <History />

          <section className="section-pt">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Fortune 100 companies and established brands trust our enterprise software development."
                  />
                </Col>
              </Row>
              <DigitalStrategy2 />
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <SearchEngineOptimization2 />
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <ECommerceSolution2 />
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <WebsiteDevelopment2 />
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col>
                  <ActionBox
                    extraClass="bg-primary"
                    btnClass="btn-light-round"
                    title="Tell us about your idea, and we'll make it happen."
                    content="Have a brand problem that needs to be solved? We'd love to hear about it!"
                    btnText="Let's Get Started"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Smart strategy & excellent performance"
                    content="Process that guarantees high productivity and profitability for your solution."
                  />
                </Col>
              </Row>
              <StrategySection />
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <AboutProject2 />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="align-items-center pb-lg-5">
                <Col>
                  <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                  >
                    {TestimonialList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
                          <TestimonialStyle1
                            key={ind}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            authorPosition={val.authorPosition}
                            description={val.description}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}
export default Home8;
