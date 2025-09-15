import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const SearchEngineImage = 'https://themes.potenzaglobalsolutions.com/react/hi-soft/static/media/services-img2.434fa424abdbbd0c4e59.webp';

const List = [
  {
    id: 1,
    item: 'We make sure that the right keyword is in the page title',
    icon: 'fas fa-check',
  },
  {
    id: 2,
    item: 'We make sure that the right keyword is in the meta description.',
    icon: 'fas fa-check',
  },
  {
    id: 3,
    item: 'We make sure that the right keyword is in the HTML heading tag.',
    icon: 'fas fa-check',
  },
  {
    id: 4,
    item: 'The keyword must be relevant to your industry.',
    icon: 'fas fa-check',
  },
  {
    id: 5,
    item: 'It cannot be “Copied” from another website.',
    icon: 'fas fa-check',
  },
];

function SearchEngineOptimization2() {
  return (
    <>
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <img className="img-fluid" src={SearchEngineImage} alt="" />
        </Col>
        <Col lg={6}>
          <span className="text-uppercase text-mutedq">
            Speed up you website
          </span>
          <h3 className="mb-2">Search Engine Optimization</h3>
          <p className="mb-4">
            So you have a website but no one visiting it? Use a past defeat as a
            motivator. Remind yourself you have nowhere to go except up as you
            have already been at the bottom. This process is implemented in
            several ways. Here are a few examples:
          </p>
          <ul className="list list-unstyled">
            {List.map((list, index) => (
              <li key={index} className="d-flex mb-2">
                <i
                  className={list.icon}
                  style={{
                    marginTop: '5px',
                    color: '#ef3139',
                  }}
                ></i>
                <span className="ms-2 ">{list.item}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default SearchEngineOptimization2;
