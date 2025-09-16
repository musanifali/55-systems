import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

// External image for website development section
const TabImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80';

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
