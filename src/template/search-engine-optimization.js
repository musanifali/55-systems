import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import TabImage from '../assets/images/about/08.webp';

function SearchEngineOptimization() {
  return (
    <>
      <Row className="align-items-center">
        <Col md={6}>
          <img className="img-fluid" src={TabImage} alt="" />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h4 className="mb-2">Increase organic traffic</h4>
          <p className="mb-4">
            So you have a website but no one visiting it? Use a past defeat as a
            motivator. Remind yourself you have nowhere to go except up as you
            have already been at the bottom. This process is implemented in
            several ways. Here are a few examples:
          </p>
          <ul className="list list-unstyled">
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>
                We make sure that the right keyword is in the page title.{' '}
              </span>
            </li>
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>
                We make sure that the right keyword is in the meta description.{' '}
              </span>
            </li>
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>
                We make sure that the right keyword is in the HTML heading tag.{' '}
              </span>
            </li>
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>The keyword must be relevant to your industry. </span>
            </li>
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>It cannot be “Copied” from another website. </span>
            </li>
            <li className="d-flex">
              <i className="fas fa-check pe-2 pt-1 text-primary"></i>
              <span>
                It must get through relevant, insightful, and informative
                content. Not paid content.{' '}
              </span>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default SearchEngineOptimization;
