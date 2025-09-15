// Libraries
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Counter from '../component/counter/counter';

function CounterBox() {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={3} sm={6} className="text-center">
          <Counter
            className=""
            countStart="0"
            countEnd="100"
            countTitle="Years of experience in IT service & solutions"
          />
        </Col>
        <Col lg={3} sm={6} className="text-center">
          <Counter
            className=""
            countStart="0"
            countEnd="650"
            countTitle="Leaders and the hard-working personalities"
          />
        </Col>
        <Col lg={3} sm={6} className="text-center">
          <Counter
            className=""
            countStart="0"
            countEnd="120"
            countTitle="Countries where we have satisfied customers"
          />
        </Col>
        <Col lg={3} sm={6} className="text-center">
          <Counter
            className=""
            countStart="0"
            countEnd="120"
            countTitle="Enterprise-class solutions & projects delivered"
          />
        </Col>
      </Row>
    </>
  );
}

export default CounterBox;
