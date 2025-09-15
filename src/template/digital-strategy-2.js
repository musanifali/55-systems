import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';

// External image URL constant
const DigitalImage = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/services-img1.acd449d549a2cd50d8e0.webp';

function DigitalStrategy2() {
  return (
    <>
      <Row className="align-items-center digitalstrategy-content">
        <Col lg={6} className="mb-4 mb-lg-0">
          <span className="text-uppercase text-mutedq">
            Increase Organic Traffic
          </span>
          <h3 className="mb-4">Digital strategy</h3>
          <p className="mb-4">
            Success isn’t really that difficult. There is a significant portion
            of the population here in North America, that actually want and need
            success to be hard! Why? So they then have a built-in excuse when
            things don’t go their way!
          </p>
          <blockquote className="blockquote">
            For those of you who are serious about having more, doing more,
            giving more and being more, success is achievable with some
            understanding of what to do.
            <cite className="d-block mt-3"> - InVisionApp Inc</cite>
          </blockquote>
          <Link className="btn btn-light btn-sm mt-3" to="#">
            View Invition Case Stduy
          </Link>
        </Col>
        <Col lg={6}>
          <img className="img-fluid" src={DigitalImage} alt="" />
        </Col>
      </Row>
    </>
  );
}

export default DigitalStrategy2;
