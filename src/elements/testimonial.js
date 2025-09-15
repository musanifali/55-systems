import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PageHeader from '../layouts/page-header/PageHeader';
import SectionTitle from '../component/section-title/section-title';

import TestimonialList from '../data/testimonial-list';
import TestimonialStyle1, {
  TestimonialStyle2,
} from '../component/testimonial/testimonial-item';

function ElementsTestimonial(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Testimonial"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Testimonial', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Testimonial : Style 1"
                  />
                  <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                  >
                    {TestimonialList.map((val, ind) => {
                      if (ind < 3) {
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
                      }
                      return null;
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb section-mb bg-light">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Testimonial : Style 2"
                  />
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
                          <TestimonialStyle2
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

export default ElementsTestimonial;
