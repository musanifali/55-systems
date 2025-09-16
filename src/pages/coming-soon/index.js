import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Logo from '../../component/logo';
import Countdown from '../../component/countdown/countdown';
// External coming soon background
const sectionBG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
import NewsletterForm from '../../form/newsletter';
import SocialInfo from '../../widget/social-info/social-info';

// SCSS
import './coming-soon.scss';

function ComingSoon() {
  useEffect(() => {
    document.body.classList.add('coming-soon-page');

    return () => {
      document.body.classList.remove('coming-soon-page');
    };
  }, []);

  return (
    <>
      <div
        className="site-content coming-soon"
        style={{
          backgroundImage: `url(${sectionBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="content-wrapper h-100 d-flex align-items-center justify-content-center">
          <section className="section-sm-ptb">
            <Container>
              <Row>
                <Col sm={12} className="text-center">
                  <Link to="/"><Logo theme="logo-light" /></Link>
                  <h2 className="title text-white mt-5">
                    <span>Launching</span> Very Soon...
                  </h2>
                </Col>
              </Row>
              <Row className="mt-4 mt-sm-5">
                <Col sm={12} className="text-center">
                  <Countdown size="size-lg" dateTime="06/01/2024" />
                </Col>
              </Row>
              <Row className="mt-4 mt-sm-5 justify-content-center">
                <Col lg={10} md={12} className="text-center">
                  <NewsletterForm />
                  <SocialInfo
                    className="mt-4 pt-4 d-flex justify-content-center"
                    theme="light"
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

export default ComingSoon;
