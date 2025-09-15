// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { defer } from 'react-router-dom';
import Button from '../../component/button/button';

function Banner() {
  return (
    <>
      <section className="section-pt">
        <Container>
          <Row>
            <Col xl={10}>
              <h1 className="text-secondary">
                Ready to propel your business into its
                <span className="bg-brush-primary"> next phase</span> of growth?
              </h1>
              <p className="mt-4">
                We design brand experiences that help enterprising nonprofits
                &amp; organizations grow their impact.
              </p>
              <Button
                btnClass="btn-light-round btn-round"
                btnText="Work with us"
                btnURL="/about-us"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Banner;
