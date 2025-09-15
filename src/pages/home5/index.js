import React from 'react';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { CategoryBoxStyle3 } from '../../component/category-box/category-style';
import BlogItem from '../../component/blog';
import Button from '../../component/button/button';
import List from '../../component/list';
import VideoPopup, { VideoPopup2 } from '../../component/video';

// Site Data
import CatData, { CatData3 } from '../../data/category-box-list2';
import BlogList from '../../data/blog-list';
import sectionBG from '../../assets/images/bg/01.webp';

// Page Section
import AverageBox from './average-box';
import ProjectTimeline from '../how-we-work/project-timeline';
import BackgroundVideo from '../../component/bg-video/bg-video';
import OutsourcedServiceList, {
  AwardList01,
  AwardList02,
} from './outsourced-service-list';

function Home5() {
  return (
    <>
      <div className="site-content homepage">
        <div className="content-wrapper">
          {/* Main Banner */}
          <BackgroundVideo />
          {/* <Banner /> */}
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Award Winning Digital Agency"
                    content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                  />
                </Col>
              </Row>
              <div className="row justify-content-center">
                {CatData3.map((val, item) => {
                  return (
                    <Col
                      key={item}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      className="mb-4"
                    >
                      <CategoryBoxStyle3
                        key={item}
                        themeColor="bg-light"
                        boxalign="text-center"
                        categoryImg={val.categoryImg}
                        className={val.className}
                        title={val.title}
                        id={val.id}
                      />
                    </Col>
                  );
                })}
              </div>
            </Container>
          </section>

          <section
            className="section-ptb bg-secondary bg-overlay-secondary overlay-90"
            style={{
              backgroundImage: `url(${sectionBG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          >
            <Container>
              <Row className="position-relative">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="list-style-03">
                    <OutsourcedServiceList />
                    {/* <List icon="fas fa-check" data={listItems3} /> */}
                  </div>
                </Col>
                <Col lg={5} className="offset-lg-1">
                  <AverageBox></AverageBox>
                  <VideoPopup2 videoURL="https://www.youtube.com/embed/LgvseYYhqU0" />
                  <SectionTitle
                    extraClass="text-start section-title-light mt-4 mb-0"
                    title="Outsourced Service In-house Feel"
                    content="Meet the outstanding performers in our industry-award-winning team of professionals."
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col md={6} className="mb-5 mb-md-0">
                  <div className="sticky-top custom-sticky">
                    <SectionTitle
                      title="Smart strategy & excellent performance"
                      content="Process that guarantees high productivity and profitability for your solution."
                    />
                    <Button
                      btnClass="btn-light-round"
                      btnText="Let's Start Project"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <ProjectTimeline />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-primary">
            <Container>
              <Row className="justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center section-title-light"
                    title="Award Winning Digital Agency"
                    content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
                  />
                </Col>
              </Row>
              <Row className="position-relative">
                <Col md={6}>
                  <div className="list-style-04">
                    <AwardList01 />
                    {/* <List icon="fas fa-check" data={listItems4} /> */}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="list-style-04">
                    <AwardList02 />
                    {/* <List icon="fas fa-check" data={listItems5} /> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row className="row justify-content-center">
                <Col xl={9} lg={10}>
                  <SectionTitle
                    extraClass="text-center"
                    title="Latest news and inspirational stories"
                    content="Check out our latest blog posts, articles, client success stories and essential announcement."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 3) {
                        return (
                          <BlogItem
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            postType={val.postType}
                            category={val.category}
                            date={val.date}
                            title={val.title}
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
        </div>
      </div>
    </>
  );
}

export default Home5;
