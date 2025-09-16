import React from 'react';

// Libraries
import Col from 'react-bootstrap/Col';

// Components
import FeatureInfo from '../../component/feature-info';

// Site Data
// External feature info images
const aboutImage1 = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80';
const aboutImage2 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2315&q=80';
const aboutImage3 = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';

function FeatureInfoSection() {
  return (
    <>
      <Col lg={4} md={6}>
        <FeatureInfo
          image={aboutImage1}
          title="Mission and vision"
          content="Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements and provide the best solutions."
          link="#"
        />
      </Col>
      <Col lg={4} md={6}>
        <FeatureInfo
          image={aboutImage2}
          title="Our challenges"
          content="We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."
          link="/about-us"
        />
      </Col>
      <Col lg={4} md={6}>
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
