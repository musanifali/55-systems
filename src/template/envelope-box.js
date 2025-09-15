// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import EnvelopeForm from '../form/envelope-form/envelope-form';

const HeadOffice = [
  { id: 1, item: '293-MB 4th Floor Phase -6, DHA LAHORE' },
  { id: 3, item: '+(012) 456-7890', icon: 'fab fa-whatsapp' },
  { id: 4, item: 'letstalk@55systems.com', icon: 'far fa-envelope' },
];

const BranchOffice = [
  { id: 1, item: '293-MB 4th Floor Phase -6, DHA LAHORE' },
  { id: 2, item: '+(124) 442-1465', icon: 'fas fa-phone-volume' },
  { id: 3, item: ' +(000) 145-4445', icon: 'fab fa-whatsapp' },
  { id: 4, item: 'letstalk@55systems.com', icon: 'far fa-envelope' },
];

function EnvelopeBox(props) {
  return (
    <>
      <section className="section-pb">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="envelope-box p-4 p-sm-5">
                <Row>
                  <Col lg={6}>
                    <EnvelopeForm />
                  </Col>
                  <Col lg={5} className="offset-lg-1 mt-4 mt-lg-0">
                    <div className="mb-4 mb-lg-5">
                      <h3>Head office</h3>
                      <ul className="office-info">
                        {HeadOffice.map((list, index) => (
                          <li key={index}>
                            <i className={list.icon}></i>
                            <span>{list.item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Branch office</h3>
                      <ul className="office-info">
                        {BranchOffice.map((list, index) => (
                          <li key={index}>
                            <i className={list.icon}></i>
                            <span>{list.item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default EnvelopeBox;
