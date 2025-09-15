import { Col, Container, Row } from 'react-bootstrap';

import SectionBG from '../../assets/images/bg/10.webp';

function Banner() {
  return (
    <>
      <section
        className="banner10 text-center section-ptb bg-light bg-overlay-secondary overlay-50"
        data-jarallax='{"speed": 0.4}'
        style={{
          backgroundImage: `url(${SectionBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container>
          <Row>
            <Col>
              <div className="py-6"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
