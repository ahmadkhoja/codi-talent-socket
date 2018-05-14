import React from 'react';
import { Nav, ButtonGroup,NavItem, Row, Tab, Button, Col } from 'react-bootstrap';


const FilterSection = ({setCityFilter,setAvailabileFilter,setgenderFilter,setSkillFilter,showAll,showSelected,showTwo,searchValue,onSearchChange}) => (

  <div class="filter">
          
          <div className="searchBar"> 
              <input  type="text" placeholder="Search" onChange={onSearchChange} value={searchValue} />
          </div>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">
       <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            <NavItem eventKey="first">Places</NavItem>
            <NavItem eventKey="second">Skills</NavItem>
            <NavItem eventKey="third">Availability</NavItem>
            <NavItem eventKey="fourth">Show Students</NavItem>
            <NavItem eventKey="fifth">Gender</NavItem>
            <NavItem eventKey="sixth">Your List</NavItem>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            <Tab.Pane eventKey="first">
                <ButtonGroup vertical block>
                    <Button onClick={() => setCityFilter("beirut")}><h4>Beirut</h4></Button>
                    <Button onClick={() => setCityFilter("saida")}><h4>Saida</h4></Button>
                    <Button onClick={() => setCityFilter("tripoli")}><h4>Tripoli</h4></Button>
                    <Button onClick={() => setCityFilter("jounyeh")}><h4>Jounyeh</h4></Button>
                    <Button onClick={() => setCityFilter("jbeil")}><h4>Jbiel</h4></Button>
                    <Button onClick={() => setCityFilter("tyre")}><h4>Tyre</h4></Button>
                    <Button onClick={() => setCityFilter("sarafand")}><h4>Sarafand</h4></Button>
                    <Button onClick={() => setCityFilter("alay")}><h4>Alay</h4></Button>
                </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <ButtonGroup vertical block>
                    <Button onClick={() => setSkillFilter("php")}>PHP</Button>
                    <Button onClick={() => setSkillFilter("react")}>REACT</Button>
                    <Button onClick={() => setSkillFilter("wordpress")}>WORDPRESS</Button>
                    <Button onClick={() => setSkillFilter("drupal")}>DRUPAL</Button>
                    <Button onClick={() => setSkillFilter("laravel")}>LARAVEL</Button>
                    <Button onClick={() => setSkillFilter("node")}>NODE JS</Button>
                    <Button onClick={() => setSkillFilter("javascript")}>JAVASCRIPT</Button>
                    <Button onClick={() => setSkillFilter("meator")}>MEATOR</Button>
                    <Button onClick={() => setSkillFilter("sql")}>SQL</Button>
                    {/* <Button onClick={() => setSkillFilter("video edior")}>VIDEO EDITOR</Button> */}
                    <Button onClick={() => setSkillFilter("bootsrap")}>BOOTSRAP</Button>
                    <Button onClick={() => setSkillFilter("ios")}>IOS</Button>
                    <Button onClick={() => setSkillFilter("angular")}>ANGULAR</Button>
                    <Button onClick={() => setSkillFilter("photoshop")}>PHOTOSHOP</Button>
                    <Button onClick={() => setSkillFilter("illustrator")}>ILLUSTRATOR</Button>
                    <Button onClick={() => setSkillFilter("adobe premiere")}>ADOBE PREMIERE</Button>
                    <Button onClick={() => setSkillFilter("video editor")}>VIDEO EDITOR</Button>
                    
                    
                </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <ButtonGroup vertical block>
                    <Button onClick={() => setAvailabileFilter("available")}>Available</Button>
                    <Button onClick={() => setAvailabileFilter("in less than 1 month")}>In less than 1 month</Button>
                    <Button onClick={() => setAvailabileFilter("in less than 2 months")}>In less than 2 month</Button>
                    <Button onClick={() => setAvailabileFilter("3 months or more")}>3months or more</Button>
                    <Button onClick={() => setAvailabileFilter("not available")}>NOT AVAILABLE</Button>
                </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Button onClick={showAll} vertical block>
                Show All
              </Button>
              <Button onClick={showTwo} vertical block>
                Show Two
              </Button>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <Button onClick={() => setgenderFilter("m")} vertical block>
                Male
              </Button>
              <Button onClick={() => setgenderFilter("f")} vertical block>
                Female
              </Button>
            </Tab.Pane>
    
            <Tab.Pane eventKey="sixth">
              <Button onClick={showSelected} vertical block>
                Show Your List
              </Button>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
  </Tab.Container>
  </div>
)


export default FilterSection;