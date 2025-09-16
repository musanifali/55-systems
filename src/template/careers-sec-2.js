import { Col, Container, Row } from 'react-bootstrap';
// External career section images
const aboutImage1 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
const aboutImage2 = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80';

import Counter from '../component/counter/counter';
import List from '../component/list';

function CareersSectionTwo() {
  const listItems = [
    { id: 1, item: 'Success is something of which we all want more', url: '/' },
    {
      id: 2,
      item: 'Most people believe that success is difficult',
      url: '/blog',
    },
    {
      id: 3,
      item: 'There are basically six key areas to higher achievement',
      url: '/about-us',
    },
    { id: 4, item: 'Believing in yourself and those around you', url: '/team' },
    { id: 5, item: 'Making a decision to do something', url: '/404' },
  ];

  return (
    <>
      <section className="section-ptb">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6} className="pe-xl-5 mb-5 mb-md-0">
              <h2 className="mb-4">
                We enable constant enterprise transformation at speed and scale.
              </h2>
              <p className="mb-4">
                Success isn't really that difficult. There is a significant
                portion of the population here in North America, that actually
                want and need success to be hard! Why? So they then have a
                built-in excuse when things don't go their way! Pretty sad
                situation, to say the least.
              </p>
              <List icon="fas fa-check" data={listItems} />
            </Col>
            <Col md={6}>
              <Row className="g-0 align-items-end mb-4 mb-sm-2">
                <Col sm={7} className="pe-sm-2 mb-4 mb-sm-0">
                  <img
                    className="img-fluid border-radius-5"
                    src={aboutImage2}
                    alt=""
                  />
                </Col>
                <Col sm={5}>
                  <Counter
                    className="counter-primary-bg py-5"
                    themeColor="counter-light"
                    countStart="0"
                    countEnd="491"
                    countTitle="Projects Complete"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={10}>
                  <img
                    className="img-fluid border-radius-5"
                    src={aboutImage1}
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CareersSectionTwo;
