import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import VideoPopup from '../component/video';
import videoImg from '../assets/images/about/tab-video.webp';
import { Link } from 'react-router-dom';

function DigitalStrategy() {
  return (
    <>
      <Row className="align-items-center digitalstrategy-content">
        <Col md={6}>
          <h4 className="mb-4">Why company needs a digital strategy?</h4>
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
        <Col md={6} className="mt-4 mt-md-0">
          <VideoPopup
            videoURL="https://www.youtube.com/embed/AqcjdkPMPJA"
            videoImage={videoImg}
          />
        </Col>
      </Row>
    </>
  );
}

export default DigitalStrategy;
