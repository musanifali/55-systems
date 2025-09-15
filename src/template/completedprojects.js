import { Col, Container, Row } from 'react-bootstrap';
import AboutBg5 from '../assets/images/about/05.webp';
import { Link } from 'react-router-dom';

function CompletedProjects(props) {
  return (
    <>
      <section className="section-pb">
        <Container>
          <Row className="g-0">
            <Col lg={3}>
              <div
                className="bg-holder h-100"
                style={{
                  backgroundImage: `url(${AboutBg5})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </Col>
            <Col lg={3} className="mb-4 mb-lg-0">
              <div className="bg-primary h-100 d-flex flex-column text-lg-end text-start">
                <div className="mt-auto p-4">
                  <h4 className="mb-3 d-block text-white">
                    Successfully completed projects
                  </h4>
                  <span className="display-4 text-white d-block">1500+</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="p-sm-5 p-4 bg-light">
                <h3>If you have any question, feel free to call us</h3>
                <Link className="display-5 text-primary font-xll" to="#">
                  +(704) 279-1249
                </Link>
                <p className="m-0 mt-2">Monday - Friday, 10:00 AM - 7:00 PM</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CompletedProjects;
