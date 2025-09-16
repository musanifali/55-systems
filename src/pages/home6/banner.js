import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data
// External banner image for home6
const BannerImg1 = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80';
import Button from '../../component/button/button';
import Counter from '../../component/counter/counter';
import AssistanceForm from '../../form/get-touch-form';

function Banner() {
  return (
    <>
      <section
        className="d-flex align-items-center overlay-home-banner home-banner-06 section-ptb bg-overlay-secondary overlay-70"
        style={{
          backgroundImage: `url(${BannerImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container>
          <Row className="position-relative d-flex align-items-center justify-content-between">
            <Col lg={6}>
              <h1 className="text-white fw-normal">
                We're 55 Systems. We help drive change with technology.
              </h1>
              <p className="text-white fw-normal">
                If success is a process with a number of defined steps, then it
                is just like any other process. So, what is the first step in
                any process?
              </p>
              <Row className="mt-4 mt-md-5">
                <Col sm={4} xl={3}>
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="250"
                    countTitle="Happy Clients"
                  />
                </Col>
                <Col sm={4} xl={3} className="mt-3 mt-sm-0">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="300"
                    countTitle="Skilled Experts"
                  />
                </Col>
                <Col sm={4} className="mt-3 mt-sm-0">
                  <Counter
                    className="counter-light"
                    countStart="0"
                    countEnd="187"
                    countTitle="Finished Projects"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <div className="assistance-form mt-4 mt-md-5 bg-white border-radius p-4">
                <h4 className="mb-4">
                  Complete the form below. We will respond as soon as possible.
                </h4>
                <AssistanceForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
