import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../component/button/button';
import ClientLogoList from '../data/client-logo-list';

// External technology partners image
const aboutImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
import ClientLogo from '../component/client-logo';

function TechnologyPartners() {
  return (
    <>
      <Row>
        <Col sm={5} className="mb-4 mb-sm-0">
          <img className="img-fluid" src={aboutImage} alt="" />
        </Col>
        <Col
          sm={7}
          className="align-self-start align-self-lg-center ps-md-0 ps-lg-5"
        >
          <h4 className="mb-4">Our Technology Partners</h4>
          <p>
            We partnered with Technology Managers to increase its skills at
            every step of the software development process.
          </p>
          <div className="client-logo-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1 mt-4 mb-5">
            {ClientLogoList.map((val, ind) => {
              return (
                <ClientLogo
                  key={ind}
                  className="cl-size-sm"
                  theme="logo-grayscale"
                  data={val.imgSrc}
                />
              );
            })}
          </div>
          <Button btnClass="btn-primary-round" btnText="Become a Partner" btnURL="/about-us" />
        </Col>
      </Row>
    </>
  );
}

export default TechnologyPartners;
