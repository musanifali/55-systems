import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import TabImage from '../assets/images/about/11.webp';

function WebsiteDevelopment() {
  return (
    <>
      <Row className="align-items-center">
        <Col md={6}>
          <img className="img-fluid" src={TabImage} alt="" />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h4 className="text-dark">Our website development process</h4>
          <p>
            The following outlines our web-development process, which can be
            split into several sensible elements:
          </p>
          <ul className="list-unstyled list-number">
            <li className="mb-2">
              <span>01</span> Technical analysis
            </li>
            <li className="mb-2">
              <span>02</span> Planning and Idea
            </li>
            <li className="mb-2">
              <span>03</span> Design and Copywriting
            </li>
            <li className="mb-2">
              <span>04</span> Front- & Back-End Coding
            </li>
            <li className="mb-2">
              <span>05</span> Quality Assurance
            </li>
            <li className="mb-2">
              <span>06</span> Testing and Launch
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default WebsiteDevelopment;
