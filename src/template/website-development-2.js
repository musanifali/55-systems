import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const WebsiteDevelopmentImage = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/services-img4.ff7e1cf66219f9f41f14.webp';

const NumberList = [
  { id: 1, item: 'Technical analysis', num: '01' },
  { id: 2, item: 'Planning and Idea', num: '02' },
  { id: 3, item: 'Design and Copywriting', num: '03' },
  { id: 4, item: 'Front- & Back-End Coding', num: '04' },
  { id: 5, item: 'Quality Assurance', num: '05' },
  { id: 6, item: 'Testing and Launch', num: '06' },
];

function WebsiteDevelopment2() {
  return (
    <>
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <img className="img-fluid" src={WebsiteDevelopmentImage} alt="" />
        </Col>
        <Col lg={6}>
          <span className="text-uppercase text-mutedq">
            Years of experience{' '}
          </span>
          <h3>Website development</h3>
          <p>
            The following outlines our web-development process, which can be
            split into several sensible elements:
          </p>
          <ul className="list-unstyled list-number">
            {NumberList.map((list, index) => (
              <li key={index} className="d-flex mb-2">
                <span className="me-2">{list.num}</span>
                <p className="mb-0">{list.item}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default WebsiteDevelopment2;
