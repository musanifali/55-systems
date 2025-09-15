import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Counter from '../component/counter/counter';
import SectionTitle from '../component/section-title/section-title';
import '../component/list/style.scss';

// Use external images instead of local assets
const aboutImage1 = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/05.9371f5e3107c8175a937.webp'; // 600x400
const aboutImage2 = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/06.331717ae8478ddf6a24f.webp'; // 600x500
const aboutImage3 = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/14.ee53c4d2f8ee632a4810.webp'; // 800x873

const ListItem = [
  { id: 1, item: 'The old expression is absolutely true', icon: 'fas fa-check' },
  { id: 2, item: 'SMART is an acronym for Specific,', icon: 'fas fa-check' },
  { id: 3, item: 'Introspection is the trick.', icon: 'fas fa-check' },
  { id: 4, item: 'You are going on a cruise,', icon: 'fas fa-check' },
  { id: 5, item: 'we will attract confusion.', icon: 'fas fa-check' },
  { id: 6, item: 'From my perspective then', icon: 'fas fa-check' },
];
function AboutProject2() {
  return (
    <>
      <Col lg={6} className="mb-4 mb-lg-0">
        <Row>
          <Col sm={6}>
            <img className="img-fluid border-radius-5 mb-4 mt-4" src={aboutImage1} alt="" />
            <img className="img-fluid border-radius-5 mb-4 mb-sm-0" src={aboutImage2} alt="" />
          </Col>
          <Col sm={6}>
            <img className="img-fluid border-radius-5 mb-4" src={aboutImage3} alt="" />
            <Counter className="counter-primary-bg" themeColor="counter-light" countStart="0" countEnd="235" countTitle="Finished Projects" />
          </Col>
        </Row>
      </Col>
      <Col lg={6}>
        <SectionTitle extraClass="mb-0" title="We enable constant enterprise transformation at speed and scale." />
        <div className="progress-info mt-4 mb-4">
          <div className="progress-inner">
            <div className="progress-bar-title">Project success percentage rate</div>
            <span className="progress-bar-number">95%</span>
          </div>
          <ProgressBar animated now={95} />
        </div>
        <div className="d-flex justify-content-center align-items-center bg-white p-3 border-radius">
          <ul className="list-unstyled list-inline me-4 mb-0">
            <li className="list-inline-item me-1 font-md  align-items-center">
              <b className="font-xl">5</b>
              <i className="fas fa-star text-warning"></i>
            </li>
          </ul>
          <h6 className="mb-0">
            Rated 4.80 out of 5 based on over
            <span className="text-primary"> 1000+ reviews</span>
          </h6>
        </div>
        <Row className="mt-4">
          <Col md={6} lg={7}>
            <ul className="pgs-list list-unstyled mt-3 mb-0">
              {ListItem.map((list, index) => {
                if (index < 3) {
                  return (
                    <>
                      <li className="d-flex text-primary" key={index}>
                        <i className={`pe-2 pt-1 text-primary ${list.icon}`}></i>
                        <span className="text-dark">{list.item}</span>
                      </li>
                    </>
                  );
                }
                return null;
              })}
            </ul>
          </Col>
          <Col md={6} lg={5}>
            <ul className="pgs-list list-unstyled mt-3 mb-0">
              {ListItem.map((list, index) => {
                if (index > 2) {
                  return (
                    <>
                      <li className="d-flex text-primary" key={index}>
                        <i className={`pe-2 pt-1 text-primary ${list.icon}`}></i>
                        <span className="text-dark">{list.item}</span>
                      </li>
                    </>
                  );
                }
                return null;
              })}
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default AboutProject2;
