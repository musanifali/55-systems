import { Col, Container, Row } from 'react-bootstrap';

import SectionTitle from '../component/section-title/section-title';
import FormInfo from '../form/get-touch-form/get-in-touch-form';
import Map from '../component/GoogleMap/googlemap';
import { Link } from 'react-router-dom';

const HeadOffice = [
  {
    id: 1,
    item: '214 West Arnold St. New York, NY 10002',
    icon: 'fa-solid fa-location-dot',
  },
  { id: 2, item: ' letstalk@hisoft.com', icon: 'fa-regular fa-envelope-open' },
  { id: 3, item: '+(704) 279-1249', icon: 'fas fa-phone-volume' },
  { id: 4, item: 'live:hisoft', icon: 'fa-brands fa-skype' },
];
function GetInTouch(props) {
  return (
    <>
      <section className={`section-pt overflow-hidden ${props.className || ''}`}>
        <Container fluid className="p-0">
          <Row className="justify-content-center g-0">
            <Col md={6} lg={6} xl={4}>
              <Map
                className="grayscale"
                location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1582525511481!5m2!1sen!2sin"
              />
            </Col>
            <Col md={6} lg={6} xl={4}>
              <div className="p-5 bg-light h-100">
                <FormInfo />
              </div>
            </Col>
            <Col lg={12} xl={4}>
              <div className="p-5 bg-overlay-theme-10 h-100 border">
                <SectionTitle
                  title="We'd love to hear from you"
                  content="We design brand experiences that help enterprising nonprofits & organizations grow their impact."
                />
                <ul className="office-info02">
                  {HeadOffice.map((list, index) => (
                    <li key={index}>
                      <Link to="#">
                        <i className={list.icon}></i>
                        <span>{list.item}</span>
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
export default GetInTouch;
