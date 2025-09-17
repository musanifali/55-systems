import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import PageHeader from '../../layouts/page-header/PageHeader';
import TeamSection from '../../template/team-section';
import SectionTitle from '../../component/section-title/section-title';
import { CaseStudyStyle2 } from '../../component/case-study';
import ActionBox from '../../component/action-box';

// Site Data
import CaseStudyList from '../../data/case-study-list';

function CaseStudy(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Case Study"
          description="Having clarity of purpose and a clear picture of what you desire, is probably the single most important factor in achievement."
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Case Study', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="d-flex align-items-center">
                <TeamSection />
              </Row>
            </Container>
          </section>

          <Container>
            <Row>
              <Col>
                <SectionTitle
                  title={[
                    <span key="what">What's next?</span>,
                    ' our latest client stories',
                  ]}
                  content="We love what we do. Our clients tell us the same thing."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Swiper
                  modules={[Pagination, A11y]}
                  spaceBetween={30}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // This is 574 to 0 View
                    },
                    575: {
                      slidesPerView: 2, // This is 767 to 575 View
                    },
                    768: {
                      slidesPerView: 3, // This is 992 to 768 View
                    },
                  }}
                >
                  {CaseStudyList.map((val, ind) => {
                    return (
                      <SwiperSlide key={ind}>
                        <CaseStudyStyle2
                          key={ind}
                          id={val.id}
                          image={val.imgsrc}
                          title={val.title}
                          category={val.category}
                          description={val.description}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Col>
            </Row>
          </Container>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <ActionBox
                    btnClass="btn-primary-round text-light"
                    title="Tell us about your idea, and we’ll make it happen."
                    content="Have a brand problem that needs to be solved? We’d love to hear about it!"
                    btnText="Let’s Get Started"
                    btnURL="/about-us"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
