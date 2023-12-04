import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Tab } from 'react-bootstrap';
import SurveyCreate from './CreateSurvey';
import CreateQuestion from './CreateQuestion';
import AddUser from './AddUser';
import AppEnums from '../AppEnums';
import { useState } from 'react';

interface IPageProp {
  handlePage: (page: AppEnums) => void;
}

const TabPage: React.FC<IPageProp> = (pageProp) => {
  const [tabToSelect, setTabToSelect] = useState("first");

  const handleTabSelection = (tabName: string) => {
    setTabToSelect(tabName);
  };
  const handleAddUserPage = (tabName: string) => {
    setTabToSelect(tabName);
  };
  const handleCreateQuestion = (tabName: string) => {
    setTabToSelect(tabName);
  };

  const handleTabClick = (tabName: string) => {
    setTabToSelect(tabName);
  };

  return (

    <Tab.Container id="left-tabs-example" activeKey={tabToSelect
    }>
      <Row>
        <Col xs={3} className='tab-align margin10'>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='tabs' onClick={() => handleTabClick("first")}>Survey Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='tabs' onClick={() => handleTabClick("second")}>Question Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='tabs' onClick={() => handleTabClick("third")}>User Details</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={8}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><SurveyCreate handleTabName={handleTabSelection} handlePage={pageProp.handlePage} /></Tab.Pane>
            <Tab.Pane eventKey="second"><CreateQuestion handleTabName={handleAddUserPage} handlePage={pageProp.handlePage} /></Tab.Pane>
            <Tab.Pane eventKey="third"><AddUser handleTabName={handleCreateQuestion} handlePage={pageProp.handlePage} /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TabPage;