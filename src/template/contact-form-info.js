import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../component/section-title/section-title';
import Logo from '../component/logo';
import GetInTouch from '../form/get-touch-form';
// External background image for contact form
const mapBG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
import { Link } from 'react-router-dom';

function ContactFormInfo() {
  return (
    <>
      <div
        className="form-wrapper bg-secondary bg-overlay-secondary overlay-90 border-radius-5 p-4 p-sm-5"
        style={{
          backgroundImage: `url(${mapBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Row className="position-relative">
          <Col lg={7} className="mb-5 mb-lg-0">
            <SectionTitle
              extraClass="section-title-light"
              title="Let's Get In Touch!"
              content="Have a project or a question? We'd love to hear from you."
            />
            <GetInTouch className="form-light" />
          </Col>
          <Col lg={5} className="text-center px-xl-5">
            <div className="bg-white border-radius px-4 py-5 d-flex h-100">
              <div className="w-100 align-self-center">
                <Link to="/">
                  <Logo />
                </Link>
                <p className="mt-4 mt-lg-5 mb-4">
                  17504 Carlton Cuevas Rd, <br /> Gulfport, MS, 39503
                </p>
                <Link className="text-dark" to="/mailto:letstalk@55systems.com">
                  letstalk@55systems.com
                </Link>
                <Link
                  to="/contact"
                  className="p-3 bg-light mt-4 mt-lg-5 d-block border-radius"
                >
                  <span className="text-dark">
                    <i className="fas fa-map pe-1 text-dark"></i>Get directions
                    on the map
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContactFormInfo;
