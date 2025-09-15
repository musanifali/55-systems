// Libraries
import Col from 'react-bootstrap/esm/Col';

import OurExpertiseBoxs from './OurExpertiseBox';
import OurExpertiseList from '../../data/our-expertise-data';
import './expertise.scss';

function OurExpertise() {
  return (
    <>
      {OurExpertiseList.map((val, item) => {
        return (
          <Col xs={12} sm={6} md={6} lg={3} key={item} className="mb-4">
            <OurExpertiseBoxs
              key={item}
              imgSrc={val.imgSrc}
              title={val.title}
              listItem={val.listItem}
            />
          </Col>
        );
      })}
    </>
  );
}

export default OurExpertise;
