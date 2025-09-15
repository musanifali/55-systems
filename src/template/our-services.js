import { Col, Container, Row } from 'react-bootstrap';

import AboutIMG from '../assets/images/about/15.webp';
import { Link } from 'react-router-dom';

const ServicesList = [
  {
    id: 1,
    item: 'Data Synchronization',
    num: '01',
  },
  {
    id: 2,
    item: 'Content Management',
    num: '02',
  },
  {
    id: 3,
    item: 'Content Delivery',
    num: '03',
  },
  {
    id: 4,
    item: 'Transaction Processing',
    num: '04',
  },
  {
    id: 5,
    item: 'Process Automation',
    num: '05',
  },
  {
    id: 6,
    item: 'Event Processing',
    num: '06',
  },
];

function OurServices(props) {
  return (
    <>
      <section className="section-pt">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h2 className="services-title">Our services</h2>
              <img
                className="img-fluid img-grayscale w-100 services-img"
                src={AboutIMG}
                alt=""
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={5} className="pt-5">
              <div className="dotted-overlay p-5">
                <div className="z-index-1 position-relative">
                  <blockquote className="blockquote">
                    For those of you who are serious about having more, doing
                    more, giving more and being more, success is achievable with
                    some understanding of what to do.
                    <cite className="d-block mt-3"> - InVisionApp Inc</cite>
                  </blockquote>
                  <Link to="#" className="btn btn-primary-round btn-round mt-3">
                    View Case Stduy
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} className="offset-lg-1">
              <div className="shadow border-radius  services-list-box">
                <h3>Digital Marketing Services</h3>
                <p>
                  Award-winning website design & creative digital agency
                  services
                </p>
                <ul className="list-unstyled list-number mb-0">
                  {ServicesList.map((list, index) => (
                    <li key={index} className="mb-2">
                      <Link to="#" className="text-secondary">
                        <span className="">{list.num}</span>
                        {list.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default OurServices;
