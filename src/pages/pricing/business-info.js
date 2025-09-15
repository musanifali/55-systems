import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function BusinessInfo() {
  return (
    <>
      <Col xxl={7} className="mt-4 mt-xxl-0">
        <div className="bg-overlay-dark-8 p-4 p-sm-5 h-100">
          <p>
            Build an enterprise platform that will manage your businesses'
            intellectual capital investments and increase productivity of your
            workforce. Every business parameters evolve with time. We keep your
            solutions up to date.
          </p>
          <p>
            Contact us at
            <Link to="mailto:pricing@55systems.com">
              {' '}
              pricing@55systems.com
            </Link>{' '}
            to start the discussion.
          </p>
          <p>
            Quality assurance adherence and processes for validation. With our
            flexible engagement and pricing models, you will invariably get more
            ROI out of your investments than you expect.
          </p>
        </div>
      </Col>
    </>
  );
}

export default BusinessInfo;
