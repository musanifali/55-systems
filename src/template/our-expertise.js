import { Col, Container, Row } from 'react-bootstrap';

import AboutIMG from '../assets/images/about/04.webp';
import SectionTitle from '../component/section-title/section-title';
import { Link } from 'react-router-dom';
function OurExpertise() {
  return (
    <>
      <section className="section-pb">
        <Container>
          <Row className="justify-content-end">
            <Col sm={12} className="position-relative z-index-1">
              <div className="whatsapp-number  bg-primary p-4 p-sm-5 border-radius shadow  float-start float-sm-end">
                <Link className="text-white font-xlll" to="#">
                  <i className="fab fa-whatsapp pe-1"></i>
                  <span>012 025 5555</span>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="pt-5">
            <Row>
              <Col md={6}>
                <img
                  className="img-fluid img-grayscale"
                  src={AboutIMG}
                  alt=""
                />
              </Col>
              <Col md={6} className="align-self-end mt-5 mt-md-0">
                <div className="dotted-overlay p-4 p-sm-5">
                  <div className="position-relative z-index-1">
                    <SectionTitle
                      title="Our Expertise. Know more about what we do"
                      content="We take pride in helping our clients deliver marvelous
                      results when it comes to their projects. From data to
                      performance, we’ve got you covered."
                    />
                    <h3 className="mb-0">
                      We're epic <br /> since{' '}
                      <span className="d-block display-2 text-stroke-primary fw-bold">
                        2002
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
export default OurExpertise;
