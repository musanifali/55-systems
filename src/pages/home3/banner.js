import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data
// External banner image for home3
const BannerImg1 = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80';
import Button from '../../component/button/button';

function Banner() {
  return (
    <>
      <section
        className="d-flex align-items-center overlay-home-banner section-ptb bg-overlay-secondary overlay-70"
        style={{
          backgroundImage: `url(${BannerImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <Row className="justify-content-center text-center position-relative">
            <Col xl={8} lg={10} className="mt-lg-5 pt-lg-4">
              <div className="d-md-flex align-item-center text-center text-md-start">
                <h2 className="text-white fw-normal">
                  We're 55 Systems. We help drive change with technology.
                </h2>
                <div className="banner-logo">
                  <span>55 Systems</span>
                </div>
              </div>
              <ul className="banner-list">
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/mission-vision">Mission & Vision</Link>
                </li>
                <li>
                  <Link to="/our-value">Our Values</Link>
                </li>
                <li>
                  <Link to="/industries">Industries</Link>
                </li>
                <li>
                  <Link to="/case-study">Case Study</Link>
                </li>
              </ul>
              <Button btnClass="btn-light" btnText="Discover More" btnURL="/about-us" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
