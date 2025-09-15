import { useState } from 'react';

// Libraries
import Col from 'react-bootstrap/esm/Col';
import TabsPGS from '../../component/tabs/tabs';

// Template Section
import ECommerceSolution from '../../template/e-commerce-solution';
import DigitalStrategy from '../../template/digital-strategy';
import WebsiteDevelopment from '../../template/website-development';
import SearchEngineOptimization from '../../template/search-engine-optimization';

function ServicesTabs(props) {
  const [data1] = useState(ECommerceSolution);
  const [data2] = useState(DigitalStrategy);
  const [data3] = useState(WebsiteDevelopment);
  const [data4] = useState(SearchEngineOptimization);

  return (
    <Col sm={12}>
      <TabsPGS
        extraClass="justify-content-center"
        tabActive="0"
        tabsTitle={[
          { id: 1, title: 'E-commerce Solution' },
          {
            id: 2,
            title: 'Digital Strategy',
          },
          {
            id: 3,
            title: 'Website Development',
          },
          {
            id: 4,
            title: 'Search Engine Optimization',
          },
        ]}
        tabsContent={[
          {
            content: data1,
          },
          {
            content: data2,
          },
          {
            content: data3,
          },
          {
            content: data4,
          },
        ]}
      />
    </Col>
  );
}
export default ServicesTabs;
