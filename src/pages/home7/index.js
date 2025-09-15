import React from 'react';
// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import { CaseStudyStyle3 } from '../../component/case-study';
import ActionBox from '../../component/action-box';

// Template
import EnvelopeBox from '../../template/envelope-box';

// Site Data
import CaseStudyList from '../../data/case-study-list';

// Page Section
import Banner from './banner';

function Home7() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          <Banner />
          <section className="section-pt">
            <Container>
              <Row>
                <Col>
                  <div className="grid-wrapper grid-lg-2 grid-md-2 grid-sm-1 grid-xs-1">
                    {CaseStudyList.map((val, ind) => {
                      if (ind > 0) {
                        return (
                          <CaseStudyStyle3
                            key={ind}
                            extraClass="masonry"
                            id={val.id}
                            image={val.imgsrc}
                            title={val.title}
                            category={val.category}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <ActionBox
                    extraClass="bg-white p-0"
                    btnClass="btn-primary-round"
                    title="Tell us about your idea, and we'll make it happen."
                    content="Have a brand problem that needs to be solved? We'd love to hear about it!"
                    btnText="Let's Get Started"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <EnvelopeBox />
        </div>
      </div>
    </>
  );
}
export default Home7;
