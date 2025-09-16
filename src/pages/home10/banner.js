import { Col, Container, Row } from 'react-bootstrap';

// External background image
const SectionBG = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

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
