import React from 'react';

// Libraries
import Col from 'react-bootstrap/Col';

// Components
import FeatureInfo from '../../component/feature-info';

// Site Data
// External about images
const aboutImage1 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
const aboutImage2 = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
const aboutImage3 = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';

function FeatureInfoSection() {
  return (
    <>
      <Col lg={3} md={6} className="mb-4 mb-lg-0">
        <FeatureInfo
          image={aboutImage1}
          title="Mission and vision"
          content="Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements and provide the best solutions."
          link="/mission-vision"
        />
      </Col>
      <Col lg={3} md={6} className="mb-4 mb-lg-0">
        <FeatureInfo
          image={aboutImage2}
          title="Our challenges"
          content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
          link="/about-us"
        />
      </Col>
      <Col lg={3} md={6} className="mb-4 mb-md-0">
        <FeatureInfo
          image={aboutImage3}
          title="Our team"
          content="Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."
          link="/team"
        />
      </Col>
    </>
  );
}

export default FeatureInfoSection;
