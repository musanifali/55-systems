import React from 'react';

// Libraries
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import SectionTitle from '../../component/section-title/section-title';
import TestimonialStyle1 from '../../component/testimonial/testimonial-item';
import Counter from '../../component/counter/counter';
import { InfoBox3 } from '../../component/infobox';
import VideoPopup from '../../component/video';
import Googlemap from '../../component/GoogleMap/googlemap';
import OurExpertise from '../../component/our-expertise/our-expertise';

// Site Data
import TestimonialList from '../../data/testimonial-list';
// External video thumbnail image for home4
const videoImg = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80';

// Page Section
import Banner from './banner';
import ServicesTabs from './tabs';
import InfoForm from './info-form';

function Home4() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <Banner />

          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col xl={8} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Award Winning Digital Agency"
                    content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                  />
                </Col>
              </Row>
              <Row className="row">
                <Col lg={3} sm={6} className="text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="11"
                    countTitle="Years of experience in IT service & solutions"
                    titleclass="text-dark"
                  />
                </Col>
                <Col lg={3} sm={6} className="text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="300"
                    countTitle="Leaders and the hard-working personalities"
                    titleclass="text-dark"
                  />
                </Col>
                <Col lg={3} sm={6} className="text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="29"
                    countTitle="Countries where we have satisfied customers"
                    titleclass="text-dark"
                  />
                </Col>
                <Col lg={3} sm={6} className="text-center">
                  <Counter
                    className=""
                    countStart="0"
                    countEnd="1090"
                    countTitle="Enterprise-class solutions & projects delivered"
                    titleclass="text-dark"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="bg-light-half-sm bg-secondary">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <VideoPopup
                    videoURL="https://www.youtube.com/embed/LgvseYYhqU0"
                    videoImage={videoImg}
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="bg-secondary section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className="section-title section-title-light text-center">
                    <h2 className="title">
                      <span>Our Expertise -</span> What we have others Don't
                    </h2>
                    <p>
                      We have expertise in all technology stacks and can adapt
                      your product to meet your users' requirements and the
                      market's needs.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <OurExpertise />
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Fortune 100 companies and established brands trust our enterprise software development."
                  />
                </Col>
                <ServicesTabs />
              </Row>
            </Container>
          </section>

          <section className="section-pb">
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

          <section className="section-pb bg-secondary form-info mb-5">
            <Container>
              <Row className="justify-content-center d-flex align-items-end">
                <Col lg={6} className="my-5 my-lg-0">
                  <SectionTitle
                    extraClass="section-title-light"
                    title="We'd love to hear from you"
                    content="We design brand experiences that help enterprising nonprofits & organizations grow their impact."
                  />
                  <InfoBox3
                    bgStyle="dark mb-3"
                    title="letstalk@55systems.com"
                    icon="far fa-envelope-open"
                  />
                  

                  <Googlemap
                    className="mt-5 mb-4 mb-lg-0"
                    style={'height: 250px;'}
                    location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821917424!2d144.956054!3d-37.817127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1427947693651"
                  />
                </Col>
                <Col lg={6}>
                  <InfoForm />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}
export default Home4;
