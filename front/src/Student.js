import React from 'react';
import ContactFormModal from './Components/ContactFormModal';
import { Button, Thumbnail, Col } from 'react-bootstrap';

const Student = ({gender,name,availability,skills,city,OnClickAdd,image}) => (
    <Col xs={1} md={4}>
      <Thumbnail >
        {/* <Image src={image} width="150px" height="150px" circle /> */}
        <div className='student-image' style={{ backgroundImage: `url(${image})` }} > </div>
        <div className='student-info'>
          <h2 className="student-name">{name}</h2>
          <h3 className="student-city">City: </h3>
          <p>{city}</p>
          <h3 className='student-availability'>Availability: </h3>
          <p>{availability}</p>
          <h3 className='student-skills'>Skills: </h3>
          <div className="skills">
            <p>#{skills.join(' #')}</p>
          </div>
        </div>
        <hr />
        <p>
        {/* <Button bsStyle="primary">See More</Button>&nbsp; */}
        <ContactFormModal name={name} />
        <Button bsStyle="success" onClick={OnClickAdd}>Add to list</Button>
        </p>
      </Thumbnail>
    </Col>
  );

  export default Student;