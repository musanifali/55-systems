import { Col, Container, Row } from 'react-bootstrap';
// External image for completed projects section
const AboutBg5 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
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
                <h3>If you have any question, we are here to help</h3>
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
