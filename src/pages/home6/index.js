import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { ActionBoxMini } from '../../component/action-box';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import { CategoryBoxStyle3 } from '../../component/category-box';
import VideoPopup from '../../component/video';
import Counter from '../../component/counter/counter';
import { CaseStudyStyle2 } from '../../component/case-study';
import ClientLogo from '../../component/client-logo';

// Template
import NeedAssistance from '../../template/needassistance';

// Site Data
import CatData from '../../data/category-box-list2';
import BlogList from '../../data/blog-list';
import CaseStudyList from '../../data/case-study-list';
import ClientLogoList from '../../data/client-logo-list';

// Page Section
import Banner from './banner';
import BgVideo from '../../assets/video/video.mp4';

function Home6() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <Banner />

          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Digital marketing services that help you grow."
                    content="Award-winning website design & creative digital agency services"
                  />
                </Col>
              </Row>
              <Row>
                {CatData.map((val, item) => {
                  return (
                    <Col
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      key={item}
                      className="mb-4 mb-lg-0"
                    >
                      <CategoryBoxStyle3
                        extraClass="bg-light"
                        key={item}
                        className={val.className}
                        title={val.title}
                        id={val.id}
                        list={val.lists}
                        image={val.image}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Know more about who we are what we do."
                    content="Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. Telephones and e-mail, clients and managers,"
                  />

                  <div className="d-flex text-center bg-overlay-black-10 position-relative videopopup-btn">
                    <VideoPopup
                      theme="video-style-2"
                      videoURL="https://www.youtube.com/embed/LgvseYYhqU0"
                    />

                    <video
                      className="video"
                      autoPlay="autoPlay"
                      loop="loop"
                      muted
                    >
                      <source src={BgVideo} />
                    </video>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} className="mb-5">
                  <div className="text-center">
                    <h4>
                      Over <span className="text-primary">500 clients</span> and{' '}
                      <u>5,000</u> Projects across the globe.
                    </h4>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={12}>
                  <div className="grid-wrapper grid-lg-4 grid-md-4 grid-sm-3 grid-xs-2">
                    {ClientLogoList.map((val, ind) => (
                      <ClientLogo
                        key={ind}
                        className="cl-size-md mx-auto px-4 py-3"
                        theme="logo-grayscale"
                        data={val.imgSrc}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pt">
            <Container>
              <Row className="justify-content-center mb-4">
                <Col xl={6}>
                  <div className="section-title">
                    <h2 className="title">
                      <span>What's next?</span> our latest client stories
                    </h2>
                    <p>
                      We love what we do. Our clients tell us the same thing.
                    </p>
                  </div>
                </Col>
                <Col xl={6}>
                  <Row className="mt-4 mt-xl-0">
                    <Col sm={6} className="mb-3 mb-sm-0">
                      <Counter
                        countStart="0"
                        countEnd="235"
                        countTitle="Custom web and mobile apps"
                      />
                    </Col>
                    <Col sm={6}>
                      <Counter
                        countStart="0"
                        countEnd="10"
                        countTitle="years of experience in IT"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col sm={12}>
                      <Button
                        btnClass="btn-primary-round"
                        btnText="View all Case Study"
                        btnURL="/case-study"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col sm={12}>
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
                      992: {
                        slidesPerView: 4, // This is 1099 to 992 View
                      },
                      1200: {
                        slidesPerView: 5, // This is Desktop to 1200 View
                      },
                    }}
                  >
                    {CaseStudyList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          {' '}
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
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="row justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Latest news and inspirational stories"
                    content="Check out our latest blog posts, articles, client success stories and essential announcement."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 3) {
                        return (
                          <BlogItem
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            postType={val.postType}
                            category={val.category}
                            date={val.date}
                            title={val.title}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
              <hr className="mt-5" />
              <Row className="mt-5">
                <Col sm={12} className="d-md-flex justify-content-center">
                  <ActionBoxMini
                    btnClass="btn-primary-round"
                    content="We have articles on a range of topics"
                    btnText="View all Blogs"
                    btnURL="/blog"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <NeedAssistance className="mb-5" />
        </div>
      </div>
    </>
  );
}

export default Home6;
