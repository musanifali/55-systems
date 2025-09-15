import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import CaseStudyStyle1 from '../component/case-study';

// Site Data
import CaseStudyList from '../data/case-study-list';
const FeatureInfoBg = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/services-img4.ff7e1cf66219f9f41f14.webp';

const NumberList = [
  { id: 1, item: 'Technical analysis', num: '01' },
  { id: 2, item: 'Planning and Idea', num: '02' },
  { id: 3, item: ' Design and Copywriting', num: '03' },
  { id: 4, item: 'Front- &amp; Back-End Coding', num: '04' },
  { id: 5, item: 'Testing and Launch', num: '05' },
];

function OurPortfolioSection(props) {
  return (
    <>
      <section className="section-pb bg-secondary">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="our-portfolio">
                <div className="bg-primary px-5 py-4 py-lg-4 text-center">
                  <h2 className="text-white mb-0">Our Portfolio</h2>
                </div>
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                >
                  {CaseStudyList.map((val, ind) => {
                    return (
                      <SwiperSlide key={ind}>
                        {' '}
                        <CaseStudyStyle1
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
              </div>
            </Col>
            <Col lg={8} className="mt-5">
              <Row className="mb-5 mb-lg-0">
                <Col md={6} className="mb-4 mb-md-0">
                  <i className="flaticon-monitor text-primary display-4"></i>
                  <h4 className="text-white mb-2">
                    We have been building our experience effectively since
                  </h4>
                  <span className="d-block display-1 text-stroke-white ">
                    2002
                  </span>
                </Col>
                <Col md={6}>
                  <img className="img-fluid" src={FeatureInfoBg} alt="" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={8} className="mb-4 mb-md-0">
                  <p className="text-white">
                    Work on the best projects for the best clients. Our clients
                    are some of the most forward-looking companies in the world.
                  </p>
                  <p className="text-white mb-0">
                    Ten years plus experience helped us to create a process that
                    guarantees high productivity and profitability for your
                    solution. We have expertise in all technology stacks and can
                    adapt your product to meet your users' requirements and the
                    market's needs.
                  </p>
                </Col>
                <Col md={4}>
                  <ul className="list-unstyled list-number mb-0">
                    {NumberList.map((list, index) => (
                      <li key={index} className="d-flex mb-2">
                        <span className="me-2">{list.num}</span>
                        <p className="mb-0 text-white">{list.item}</p>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default OurPortfolioSection;
