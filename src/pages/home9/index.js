import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../../component/section-title/section-title';
import ClientLogo from '../../component/client-logo';
import { ActionBoxMini } from '../../component/action-box';
import BlogItem from '../../component/blog';

// Template
import GetInTouch from '../../template/get-in-touch';
import OurServices from '../../template/our-services';
import OurExpertise from '../../template/our-expertise';

// Site Data
import BlogList from '../../data/blog-list';
import ClientLogoList from '../../data/client-logo-list';
import '../../assets/scss/style.scss';

// Page Section
import Slider from './slider';

function Home9() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          <Slider />

          <OurExpertise />

          <section className="section-ptb bg-light">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <div className="section-title text-center">
                    <h2 className="title">
                      Over <span className="text-primary">500 clients </span>{' '}
                      and <span className="text-primary">5,000 Projects </span>
                      across the globe.
                    </h2>
                    <p className="lead">
                      You contribute over half of your life operating. Let us
                      help you find the right fit for you or your corporation.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={12}>
                  <div className="grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {ClientLogoList.map((val, ind) => (
                      <ClientLogo
                        key={ind}
                        className="cl-size-md bg-white px-4 py-5 h-100 text-center"
                        theme="logo-grayscale"
                        data={val.imgSrc}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <OurServices />

          <section className="section-pt">
            <Container>
              <Row className="justify-content-center">
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
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-sm-2 grid-xs-1">
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
          <GetInTouch className="mb-5" />
        </div>
      </div>
    </>
  );
}
export default Home9;
