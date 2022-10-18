import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

function SchoolTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
}

export default SchoolTabs;